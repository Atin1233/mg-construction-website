import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const projectDescription = formData.get('projectDescription') as string;
    const file = formData.get('file') as File | null;

    // Validate required fields
    if (!name || !email || !phone || !projectDescription) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter
    // Note: You'll need to configure these environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || process.env.CONTACT_EMAIL,
        pass: process.env.SMTP_PASSWORD || process.env.SMTP_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${process.env.CONTACT_EMAIL || email}>`,
      to: process.env.CONTACT_EMAIL || 'info@mgconstruction.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0a1d37;">New Contact Form Submission</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0a1d37; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0a1d37; margin-top: 0;">Project Description</h3>
            <p style="white-space: pre-wrap;">${projectDescription}</p>
          </div>
          
          ${file ? `<p><strong>File Attached:</strong> ${file.name} (${(file.size / 1024).toFixed(2)} KB)</p>` : ''}
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Contact Information:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        
        Project Description:
        ${projectDescription}
        
        ${file ? `File Attached: ${file.name}` : ''}
      `,
      attachments: file
        ? [
            {
              filename: file.name,
              content: Buffer.from(await file.arrayBuffer()),
            },
          ]
        : [],
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Optionally, send a confirmation email to the user
    if (process.env.SEND_CONFIRMATION_EMAIL === 'true') {
      const confirmationMailOptions = {
        from: process.env.CONTACT_EMAIL || 'info@mgconstruction.com',
        to: email,
        subject: 'Thank you for contacting M.G. Construction Co.',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0a1d37;">Thank You for Contacting Us!</h2>
            <p>Dear ${name},</p>
            <p>Thank you for reaching out to M.G. Construction Co. We have received your inquiry and will get back to you as soon as possible.</p>
            <p>In the meantime, feel free to call us directly:</p>
            <ul>
              <li><strong>Phone:</strong> (732) 251-5110</li>
              <li><strong>Alt Phone:</strong> (732) 718-4127</li>
            </ul>
            <p>Best regards,<br>M.G. Construction Co.</p>
          </div>
        `,
      };

      await transporter.sendMail(confirmationMailOptions);
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later or call us directly.' },
      { status: 500 }
    );
  }
}

