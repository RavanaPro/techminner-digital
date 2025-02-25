import {
    Html,
    Head,
    Font,
    Preview,
    Heading,
    Row,
    Section,
    Text,
    Button,
  } from '@react-email/components';
  
  interface VerificationEmailProps {
    firstName: string;
  
  }
  
  export default function VerificationEmail({ firstName }: VerificationEmailProps) {
    console.log(firstName);
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <title>Thank you for connecting with TechMinner</title>
          <Font
            fontFamily="Roboto"
            fallbackFontFamily="Verdana"
            webFont={{
              url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
              format: 'woff2',
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
       
        <Section>
          <Row>
            <Heading as="h2">Hello {firstName},</Heading>
          </Row>
          <Row>
            <Text>
              Thank you for enquiry. Please wait our business team connect with you sortly.
            </Text>
          </Row>
      
          <Row>
            <Text>
              Thanks and Regards
            </Text>
          </Row>
          <Row>
            <Text>
              Techminner Digital
            </Text>
          </Row>
         
        </Section>
      </Html>
    );
  }