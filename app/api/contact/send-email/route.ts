import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { contactType } from "@/app/(public)/contact/schema";

// Create email transporter
const createTransporter = () => {
  // Gmail configuration (recommended for personal use)
  if (
    process.env.EMAIL &&
    process.env.APP_PASSWORD
  ) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });
  }

  // Generic SMTP configuration (for custom email providers)
  if (
    process.env.SMTP_HOST &&
    process.env.SMTP_PORT &&
    process.env.SMTP_EMAIL &&
    process.env.SMTP_PASSWORD
  ) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  throw new Error("Email configuration is missing. Please set environment variables.");
};

export async function POST(request: NextRequest) {
  try {
    const body: contactType = await request.json();

    // Validate required fields
    if (!body.fullName || !body.email || !body.projectDescription) {
      return NextResponse.json(
        { message: "Missing required fields", success: false },
        { status: 400 }
      );
    }

    const transporter = createTransporter();

    // Email to your inbox
    const mailOptions = {
      from: process.env.EMAIL || process.env.SMTP_EMAIL,
      to: process.env.EMAIL,
      subject: `New Contact Form Submission - ${body.projectType}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.1);">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px 20px; text-align: center; color: white;">
              <h1 style="margin: 0; font-size: 28px; font-weight: 600;">New Inquiry Received! 🎉</h1>
              <p style="margin: 8px 0 0 0; font-size: 14px; opacity: 0.9;">From your portfolio contact form</p>
            </div>

            <div style="padding: 30px;">
              <h2 style="color: #333; font-size: 20px; margin: 0 0 20px 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Submission Details</h2>
              
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <p style="margin: 12px 0; color: #333;"><strong style="color: #667eea;">👤 Name:</strong> ${body.fullName}</p>
                <p style="margin: 12px 0; color: #333;"><strong style="color: #667eea;">📧 Email:</strong> <a href="mailto:${body.email}" style="color: #667eea; text-decoration: none;">${body.email}</a></p>
                <p style="margin: 12px 0; color: #333;"><strong style="color: #667eea;">📋 Project Type:</strong> ${body.projectType}</p>
              </div>

              <h3 style="color: #333; font-size: 16px; margin: 20px 0 10px 0;">Project Description:</h3>
              <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #667eea; border-radius: 4px; white-space: pre-wrap; color: #555; line-height: 1.6;">
                ${body.projectDescription}
              </div>
            </div>

            <div style="padding: 20px 30px; background: #f8f9fa; text-align: center; border-top: 1px solid #e0e0e0;">
              <a href="mailto:${body.email}?subject=Re: Your inquiry" style="display: inline-block; background: #667eea; color: white; text-decoration: none; padding: 12px 30px; border-radius: 6px; font-weight: 600; margin: 0 10px;">
                Reply to Inquiry
              </a>
            </div>

            <div style="padding: 20px 30px; background: #2d3748; color: #fff; text-align: center; font-size: 12px;">
              <p style="margin: 0; opacity: 0.8;">This email was sent from your portfolio contact form</p>
              <p style="margin: 5px 0 0 0; opacity: 0.6;">© ${new Date().getFullYear()} All rights reserved</p>
            </div>
          </div>
        </div>
      `,
      replyTo: body.email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Optional: Send confirmation email to the user
    const confirmationEmail = {
      from: process.env.EMAIL || process.env.SMTP_EMAIL,
      to: body.email,
      subject: "We received your inquiry - Thank you!",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.1);">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center; color: white;">
              <h1 style="margin: 0; font-size: 28px; font-weight: 600;">Thank You! 🙏</h1>
              <p style="margin: 8px 0 0 0; font-size: 16px; opacity: 0.95;">We've received your inquiry</p>
            </div>

            <div style="padding: 30px;">
              <p style="color: #333; font-size: 16px; margin: 0 0 20px 0;">
                Hi <strong>${body.fullName}</strong>,
              </p>
              
              <p style="color: #555; font-size: 15px; line-height: 1.6; margin: 0 0 20px 0;">
                Thank you for reaching out! We've received your inquiry and really appreciate your interest in working with us. Our team will review your project details and get back to you as soon as possible.
              </p>

              <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
                <h3 style="margin: 0 0 15px 0; color: #333; font-size: 14px;">Your Submission Summary:</h3>
                <p style="margin: 8px 0; color: #555;"><strong>Project Type:</strong> ${body.projectType}</p>
                <p style="margin: 8px 0; color: #555;"><strong>Your Email:</strong> ${body.email}</p>
                <p style="margin: 8px 0; color: #555;"><strong>Submitted:</strong> ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
              </div>

              <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0 0 8px 0; color: #666; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Your Message:</p>
                <p style="margin: 0; color: #333; white-space: pre-wrap; line-height: 1.6; font-size: 14px;">
                  ${body.projectDescription}
                </p>
              </div>

              <p style="color: #666; font-size: 14px; line-height: 1.6; margin: 20px 0;">
                We typically respond within <strong>24-48 hours</strong>. If you have any urgent questions, feel free to reach out directly.
              </p>
            </div>

            <div style="padding: 25px 30px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-top: 1px solid #e0e0e0;">
              <p style="margin: 0; color: #666; font-size: 13px; text-align: center;">
                <strong style="color: #333;">Looking forward to working with you!</strong><br>
                <span style="opacity: 0.7;">The Team</span>
              </p>
            </div>

            <div style="padding: 15px 30px; background: #2d3748; color: #fff; text-align: center; font-size: 12px;">
              <p style="margin: 0; opacity: 0.8;">© ${new Date().getFullYear()} All rights reserved</p>
              <p style="margin: 5px 0 0 0; opacity: 0.6;">This is an automated confirmation email</p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(confirmationEmail);

    return NextResponse.json(
      {
        message: "Email sent successfully!",
        success: true,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Email error:", error);
    return NextResponse.json(
      {
        message: error.message || "Failed to send email",
        success: false,
      },
      { status: 500 }
    );
  }
}
