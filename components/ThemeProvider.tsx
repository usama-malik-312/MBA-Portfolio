"use client";

export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    // ThemeProvider wrapper ensures client-side rendering
    // Actual theme logic is handled by useTheme hook
    return <>{children}</>;
}
