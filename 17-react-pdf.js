
// npm config set legacy-peer-deps true
// npm cache clean --force

// npm install --force @react-pdf/renderer

// npm install buffer --save



import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '##FF0000'
  },
  section: {
    margin: 20,
    padding: 50,
    flexGrow: 1
  }
});


// এইটা দিবেন কার্ডের ভিতরে প্রথম যে ফাংশনটা

const doc = () => (
  <Document>
    <Page bookmark="Harry Potter and the Philosopher's Stone">
     <Text >{name}</Text>
<Text >{title}</Text>
<Text >{about}</Text>
    </Page>
  </Document>
);


// এটা দিবেন বাটন যেটা ছিল না । ডাউন লোড করার জন্য ওটাকে ডিলিট করে ওই জায়গায়  বসিয়ে দিবে

<div>
    <PDFDownloadLink document={<MyDoc />} fileName="book.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>
</div>