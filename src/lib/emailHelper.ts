import { format } from 'date-fns';

import { TBooking } from '@/app/api/types';

export function html(params: { url: string; host: string }) {
  const { url, host } = params;

  const escapedHost = host.replace(/\./g, '&#8203;.');

  const brandColor = '#b8182b';
  const color = {
    background: '#b91c1c',
    text: '#fff',
    mainBackground: '#490812',
    buttonBackground: brandColor,
    buttonBorder: brandColor,
    buttonText: '#fff',
  };

  // TODO: reformat page, make prettier
  return `
<body style="background: ${color.background};">
  <table width="100%" border="0" cellspacing="20" cellpadding="0"
    style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px;">
    <tr>
      <td align="center"
        style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
        Sign in to <strong>${escapedHost}</strong>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" style="border-radius: 5px;" bgcolor="${color.buttonBackground}"><a href="${url}"
                target="_blank"
                style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${color.buttonText}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${color.buttonBorder}; display: inline-block; font-weight: bold;">Sign
                in</a></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center"
        style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
        If you did not request this email you can safely ignore it.
      </td>
    </tr>
  </table>
</body>
`;
}

// Email Text body (fallback for email clients that don't render HTML, e.g. feature phones)
export function text({ url, host }: { url: string; host: string }) {
  return `Sign in to ${host}\n${url}\n\n`;
}

// Used backend type for TBooking because this will be called from the backend.
export function generateSuccessfulBookingEmailHtml(
  name: string,
  successfulBooking: TBooking,
) {
  const { startTime, endTime, createdDate, room } = successfulBooking;

  const formattedStartTime = format(startTime, "MMMM d, yyyy 'at' h:mm a");
  const formattedEndTime = format(endTime, "MMMM d, yyyy 'at' h:mm a");
  const formattedCreatedDate = createdDate
    ? format(createdDate, "MMMM d, yyyy 'at' h:mm a")
    : 'Unknown';

  return `
  <body style="background-color:#fff;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif">
    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:37.5em">
      <tbody>
        <tr style="width:100%">
          <td>
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:30px 20px">
              <tbody>
                <tr>
                  <td><img src="/static/yelp-logo.png" style="display:block;outline:none;border:none;text-decoration:none" /></td>
                </tr>
              </tbody>
            </table>
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="border:1px solid rgb(0,0,0, 0.1);border-radius:3px;overflow:hidden">
              <tbody>
                <tr>
                  <td>
                    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation">
                      <tbody style="width:100%">
                        <tr style="width:100%"><img src="/static/yelp-header.png" style="display:block;outline:none;border:none;text-decoration:none;max-width:100%" width="620" /></tr>
                      </tbody>
                    </table>
                    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:20px;padding-bottom:0">
                      <tbody style="width:100%">
                        <tr style="width:100%">
                          <td data-id="__react-email-column">
                            <h1 style="font-size:32px;font-weight:bold;text-align:center">Hi <!-- -->${name}}<!-- -->,</h1>
                            <h2 style="font-size:26px;font-weight:bold;text-align:center">Thank you for booking a room with the Hatch Booking System. Below are your booking details.</h2>
                            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:20px">
                              <tbody>
                                <tr>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                            <p style="font-size:16px;line-height:24px;margin:16px 0"><b>Booking Start Time: </b>${formattedStartTime}</p>
                            <p style="font-size:16px;line-height:24px;margin:16px 0"><b>Booking End Time: </b>${formattedEndTime}</p>
                            <p style="font-size:16px;line-height:24px;margin:16px 0"><b>Booking Room: </b>${room}</p>
                            <p style="font-size:16px;line-height:24px;margin:16px 0;margin-top:-5px"><b>Created at: </b>${formattedCreatedDate}</p>
                            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:20px">
                              <tbody>
                                <tr>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                            <p style="font-size:16px;line-height:24px;margin:16px 0">If you have any questions or need further assistance, please don&#x27;t hesitate to contact us.</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:20px;padding-top:0">
                      <tbody style="width:100%">
                        <tr style="width:100%">
                          <td colSpan="2" data-id="__react-email-column" style="display:flex;justify-content:center;width:100%"><a style="line-height:100%;text-decoration:none;display:inline-block;max-width:100%;mso-padding-alt:0px;background-color:#e00707;border-radius:3px;color:#FFF;font-weight:bold;border:1px solid rgb(0,0,0, 0.1);cursor:pointer;padding:12px 30px 12px 30px" target="_blank"><span><!--[if mso]><i style="mso-font-width:500%;mso-text-raise:18" hidden>&#8202;&#8202;&#8202;</i><![endif]--></span><span style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:9px">Edit or Cancel Booking</span><span><!--[if mso]><i style="mso-font-width:500%" hidden>&#8202;&#8202;&#8202;&#8203;</i><![endif]--></span></a></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style="font-size:12px;line-height:24px;margin:16px 0;color:rgb(0,0,0, 0.7)">McMaster Engineering Society</p>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
  `;
}

export function generateSuccessfulBookingEmailText(
  name: string,
  successfulBooking: TBooking,
) {
  const { startTime, endTime, createdDate, room } = successfulBooking;

  const formattedStartTime = format(startTime, "MMMM d, yyyy 'at' h:mm a");
  const formattedEndTime = format(endTime, "MMMM d, yyyy 'at' h:mm a");
  const formattedCreatedDate = createdDate
    ? format(createdDate, "MMMM d, yyyy 'at' h:mm a")
    : 'Unknown';

  return `
  HI ${name},


THANK YOU FOR BOOKING A ROOM WITH THE HATCH BOOKING SYSTEM. BELOW ARE YOUR
BOOKING DETAILS.



Booking Start Time: ${formattedStartTime}

Booking End Time: ${formattedEndTime}

Booking Room: ${room}

Created at: ${formattedCreatedDate}


If you have any questions or need further assistance, please don't hesitate to
contact us.

Edit or Cancel Booking

McMaster Engineering Society`;
}
