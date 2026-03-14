import { NextRequest, NextResponse } from "next/server";

// TODO: Replace mock with Resend integration
// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // --- Mock mode: simulate sending delay ---
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log("[Mock Contact]", { name, email, subject, message });

    // --- Resend integration (uncomment when ready) ---
    // await resend.emails.send({
    //   from: 'Portfolio <noreply@elbssir.com>',
    //   to: 'contact@elbssir.com',
    //   replyTo: email,
    //   subject: `[Portfolio Contact] ${subject}`,
    //   html: `
    //     <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #1a1a2e; color: #e0e0e0; border-radius: 12px;">
    //       <div style="border-bottom: 2px solid #c0392b; padding-bottom: 16px; margin-bottom: 16px;">
    //         <h2 style="color: #ffb7c5; margin: 0;">New Contact Message</h2>
    //       </div>
    //       <p><strong style="color: #ffb7c5;">Name:</strong> ${name}</p>
    //       <p><strong style="color: #ffb7c5;">Email:</strong> <a href="mailto:${email}" style="color: #60a5fa;">${email}</a></p>
    //       <p><strong style="color: #ffb7c5;">Subject:</strong> ${subject}</p>
    //       <div style="margin-top: 20px; padding: 16px; background: #16213e; border-radius: 8px; border-left: 3px solid #c0392b;">
    //         <p style="margin: 0; white-space: pre-wrap;">${message}</p>
    //       </div>
    //       <p style="margin-top: 24px; font-size: 12px; color: #666;">Sent from elbssir.com contact form</p>
    //     </div>
    //   `,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
