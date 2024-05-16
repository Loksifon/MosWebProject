import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import { FC } from "react";

interface IFormPDF {
  name: string;
  picture?: string;
}

export const DocumentPDF: FC<IFormPDF> = ({ name, picture }) => {
  return (
    <>
      <Document>
        <Page size="A4" wrap>
          <View>
            <Text>Title:</Text>
          </View>
          <View>
            <Text>{name}</Text>
          </View>
          <View>
            <Text>Picture:</Text>
            {picture && <Image src={picture} />}
          </View>
        </Page>
      </Document>
    </>
  );
};
