import { Box, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import React from "react";

export function FaqContent() {
  return (
    <Accordion allowMultiple width="full">
      {faqList.map(({ title, content }) => (
        <AccordionItem key={title} bg="gray.200">
          <h2>
            <AccordionButton py={4}>
              <Box flex="1" textAlign="left" fontSize="md">
                {title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{content}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

const faqList = [
  {
    title: "How long are shipping times?",
    content: `Your products will ship within two days of your order, and then take up to two weeks to reach your doorstep. Each product at ThePowerBelt has an estimated
delivery time that you can find in the product description.`,
  },
  {
    title: "What's your return policy?",
    content: `Instead of returning items, you can contact us for a full refund. Why? Returns run counter to our emphasis on sustainability: every return has a
    carbon footprint. So just tell us what went wrong, send along a pic, and we’ll give you your money back in full. Then, if possible, you can donate
    your product to a local charity or recycle it.`,
  },
  {
    title: "Can I cancel my order?",
    content: `Cancelations are possible if you do not receive your package within the timeframe specified for each individual product. Sometimes orders get sent out
    before we can process the cancelation. So if you cancel your order but still receive the package, then please go ahead and do one of three things:
    recycle it, donate it, or enjoy it.`,
  },
  {
    title: "What happens if I receive the wrong item?",
    content: `If there’s an issue with your order -- if it’s the wrong size, wrong color, defective, or otherwise not exactly what you wanted -- then simply notify
    us, and we’ll give you a refund. You won’t be asked to ship the product back to us.`,
  },
  {
    title: "Do you offer exchanges?",
    content: `We do not offer exchanges. However, if for any reason you didn’t get the exact product you expected, just let us know and we’ll get you a new one.`,
  },
];
