
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;    //This is typescript defining what kind of data will children accept.
}>) {
  return (
    <>
        <h2>inner layout item .</h2>
        {children}
    </>
  );
}
