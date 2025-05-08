export default function ProtectLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div id="protectlayout">{children}</div>;
}
