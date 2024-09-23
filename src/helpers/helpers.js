export const StructureFinalUrl = (
  url, //string
  populateForm = {}, // {name, firstName, lastName, email, guests, location}
  tracking = {}, //{ utmSource,utmMedium, utmCampaign, utmTerm, utmContent
  extraData = {}, //{ lead, data1, data2, data3, data4 }
  layoutOptions = {} // {backgroundColor, textColor, mainColor, hideBookingPageHeaderDescription}
) => {
  // Construct the base URL
  let finalUrl = url;

  // Add is_embed=1 to the URL
  finalUrl += (finalUrl.includes("?") ? "&" : "?") + "is_embed=1";

  // Helper function to add query parameters to the URL
  const addQueryParam = (paramName, paramValue) => {
    if (paramValue !== undefined) {
      //remove "#" form hex values to sanitize
      const encodedValue = paramName.includes("_color")
        ? paramValue.replace("#", "")
        : paramValue;
      finalUrl += `&${paramName}=${encodeURIComponent(encodedValue)}`;
    }
  };

  // Add query parameters from populateForm object
  addQueryParam("name", populateForm.name);
  addQueryParam("first_name", populateForm.firstName);
  addQueryParam("last_name", populateForm.lastName);
  addQueryParam("email", populateForm.email);
  addQueryParam("guests", populateForm.guests);
  addQueryParam("location", populateForm.location);

  // Add query parameters from tracking object
  addQueryParam("utm_source", tracking.utmSource);
  addQueryParam("utm_medium", tracking.utmMedium);
  addQueryParam("utm_campaign", tracking.utmCampaign);
  addQueryParam("utm_term", tracking.utmTerm);
  addQueryParam("utm_content", tracking.utmContent);

  // Add query parameters from extraData object
  addQueryParam("lead", extraData.lead);
  addQueryParam("data1", extraData.data1);
  addQueryParam("data2", extraData.data2);
  addQueryParam("data3", extraData.data3);
  addQueryParam("data4", extraData.data4);

  // Add query parameters from layoutOptions object
  addQueryParam("bg_color", layoutOptions.backgroundColor);
  addQueryParam("text_color", layoutOptions.textColor);
  addQueryParam("main_color", layoutOptions.mainColor);
  addQueryParam(
    "hide_booking_page_headers",
    layoutOptions.hideBookingPageHeaders !== undefined &&
      layoutOptions.hideBookingPageHeaders === true
      ? "1"
      : undefined
  );
  addQueryParam(
    "hide_space_details", //does not apply for routing form, for that disable "show header and description" directly on the routing form details page
    layoutOptions.hideSpaceDetails !== undefined &&
      layoutOptions.hideSpaceDetails === true
      ? "1"
      : undefined
  );
  addQueryParam(
    "testing_rf",
    layoutOptions.testingRoutingForm !== undefined &&
      layoutOptions.testingRoutingForm === true
      ? "1"
      : undefined
  ); //only works for testing routing from urls, if enabled no submissions are created.
  addQueryParam(
    "testing_no_nav",
    layoutOptions.testingDontNavigate !== undefined &&
      layoutOptions.testingDontNavigate === true
      ? "1"
      : undefined
  ); //only works for testing routing from urls

  addQueryParam(
    "is_preview",
    layoutOptions.isPreview !== undefined && layoutOptions.isPreview === true
      ? "1"
      : undefined
  ); //only works for testing

  addQueryParam(
    "book_from_space",
    layoutOptions.bookFromSpace !== undefined &&
      layoutOptions.bookFromSpace === true
      ? "1"
      : undefined
  ); //only works for calendu modal from "Book from space"
  return finalUrl;
};
