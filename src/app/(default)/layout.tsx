export default function DefaultLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div id="defaultlayout">{children}</div>;
}
