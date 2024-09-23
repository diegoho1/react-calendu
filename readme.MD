# **React Calendu**

A React library for integrating Calendu booking links directly into your website using multiple embed options like direct embed, floating buttons, inline text, and call-to-action buttons. Easily embed a space, routing form, team booking page, or your personal booking page on your website using Calendu's React components. This allows visitors to book directly from your site without needing to navigate away.

## **Installation**

You can install this package using npm:

```bash
npm install react-calendu
```

## **Usage**

The package provides multiple ways to embed Calendu booking links into your website, including:

- **Direct Embed**: Embed the Calendu booking page directly in your app.
- **Call to Action Button**: When clicked, a scheduling calendar will pop up.
- **Inline Text**: Clickable text that opens a modal with the scheduling calendar.
- **Floating Button**: A button that is always in the bottom right corner of your site.

### **Direct Embed**

The `DirectEmbed` component renders a Calendu booking page directly on your site.

#### Props

- **url** (string, required): The Calendu booking link URL.
- **styles** (object, optional): Custom styles for the iframe.
- **populateForm** (object, optional): Pre-fill form fields.
- **tracking** (object, optional): UTM parameters for tracking.
- **extraData** (object, optional): Additional form data.
- **layoutOptions** (object, optional): Customize the layout of the embed (background colors, text colors, etc.).
- **iframeTitle** (string, optional): The title attribute for the iframe.

#### Example

```jsx
import { DirectEmbed } from "react-calendu";

<DirectEmbed
  url="https://calendu.com/my-company/interview"
  styles={{ height: "700px", width: "100%", maxWidth: "1050px" }}
/>;

**Note**: Replace `"https://calendu.com/my-company/interview"` with your actual Calendu booking link.
```

### **Call to Action Button**

A button that opens the Calendu scheduling modal when clicked.

#### Props

- **url** (string, required): The Calendu booking link URL.
- **htmlRootElement** (DOM element, required): The root element where the modal will be rendered.
- **buttonText** (string, optional): The text displayed on the button.
- **styles** (object, optional): Custom styles for the button.
- **populateForm** (object, optional): Pre-fill form fields.
- **tracking** (object, optional): UTM parameters for tracking.
- **extraData** (object, optional): Additional form data.
- **layoutOptions** (object, optional): Customize the layout of the embed (background colors, text colors, etc.).
- **iframeTitle** (string, optional): The title attribute for the iframe.

#### Example

```jsx
import { CallToActionButton } from "react-calendu";

<CallToActionButton
  url="https://calendu.com/mycompany/interview"
  buttonText="Book a meeting"
/>;

**Note**: Replace `"https://calendu.com/my-company/interview"` with your actual Calendu booking link.
```

### **Inline Text**

A clickable text that opens a modal when clicked. The modal contains the Calendu scheduling page.

#### Props

- **url** (string, required): The Calendu booking link URL.
- **htmlRootElement** (DOM element, required): The root element where the modal will be rendered.
- **text** (string, required): The text displayed on the clickable link.
- **styles** (object, optional): Custom styles for the text link.
- **populateForm** (object, optional): Pre-fill form fields.
- **tracking** (object, optional): UTM parameters for tracking.
- **extraData** (object, optional): Additional form data.
- **layoutOptions** (object, optional): Customize the layout of the embed (background colors, text colors, etc.).
- **iframeTitle** (string, optional): The title attribute for the iframe.

#### Example

```jsx
import { InlineText } from "react-calendu";

<InlineText
  url="https://calendu.com/my-company/interview"
  text="Click here to book a meeting"
/>;

**Note**: Replace `"https://calendu.com/my-company/interview"` with your actual Calendu booking link.
```

### **Floating Button**

A floating button that stays in the bottom right corner of the site and opens the Calendu scheduling modal when clicked.

#### Props

- **url** (string, required): The Calendu booking link URL.
- **htmlRootElement** (DOM element, required): The root element where the modal will be rendered.
- **buttonText** (string, optional): The text displayed on the button.
- **styles** (object, optional): Custom styles for the button.
- **populateForm** (object, optional): Pre-fill form fields.
- **tracking** (object, optional): UTM parameters for tracking.
- **extraData** (object, optional): Additional form data.
- **layoutOptions** (object, optional): Customize the layout of the embed (background colors, text colors, etc.).
- **iframeTitle** (string, optional): The title attribute for the iframe.
- **alignToRightBottom** (boolean, optional): Aligns the button to the bottom-right by default. Set to `false` for bottom-left alignment.

#### Example

```jsx
import { FloatingButton } from "react-calendu";

<FloatingButton
  url="https://calendu.com/my-company/interview"
  buttonText="Schedule"
/>;

**Note**: Replace `"https://calendu.com/my-company/interview"` with your actual Calendu booking link.
```

## **Prop Details**

### **populateForm**

An object used to pre-fill certain fields in the booking form.

- **name** (string, optional): The full name of the person.
- **firstName** (string, optional): The first name of the person.
- **lastName** (string, optional): The last name of the person.
- **email** (string, optional): The email address.
- **guests** (string, optional): Number of guests (if applicable).
- **location** (string, optional): The location for the meeting.

### **tracking**

An object containing UTM parameters for tracking the booking source.

- **utmSource** (string, optional): UTM source, e.g., 'google', 'newsletter'.
- **utmMedium** (string, optional): UTM medium, e.g., 'email', 'cpc'.
- **utmCampaign** (string, optional): UTM campaign name.
- **utmTerm** (string, optional): UTM term, typically used for search keyword tracking.
- **utmContent** (string, optional): UTM content, used to differentiate similar content or links.

### **extraData**

An object to pass additional data to the Calendu booking system.

- **lead** (string, optional): A lead identifier.
- **data1** (string, optional): Additional data field 1.
- **data2** (string, optional): Additional data field 2.
- **data3** (string, optional): Additional data field 3.
- **data4** (string, optional): Additional data field 4.

### **layoutOptions**

An object for customizing the layout and appearance of the embed.

- **backgroundColor** (string, optional): The background color of the embed, in hex format (without the '#').
- **textColor** (string, optional): The text color of the embed, in hex format (without the '#').
- **mainColor** (string, optional): The main accent color of the embed, in hex format (without the '#').
- **hideBookingPageHeaders** (boolean, optional): Hides the booking page headers if set to `true`.
- **hideSpaceDetails** (boolean, optional): Hides space details if set to `true`.

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
