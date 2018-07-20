# adapt-certificate

**Certificate** is an *extension* for the [Adapt framework](https://github.com/adaptlearning/adapt_framework).
It provides the user with a certificate on completing the assessment.

## Installation

Copy the folder into src/extensions. Make sure the details shown in example.json are applied in your config.json.

Please note that the [**Spoor**](https://github.com/adaptlearning/adapt-contrib-spoor) extension must be installed for this extension to work correctly.

## Settings

**Certificate** has several attributes to be set in course.json. These provide a pathway to the template certificate image, as well as dimensions for adding text in the correct positions.

To trigger the certificate, you must include a link with the following attributes: `<a href="javascript:;" class="js-generate-certificate">Certificate</a>`. Please note, this link can trigger a certificate at any stage of the assessment. Hiding the link until the assessment is complete is left at the developer's discretion.

## Limitations

No known limitations.


----------------------------

