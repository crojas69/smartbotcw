# Customization Changes Made

This document summarizes the customization changes made to the Chatwoot installation for less than $1.

## Logo Customization

1. **Replaced Logo Files**:
   - `public/brand-assets/logo.svg` - Main logo with "Smarbot IABOT" text
   - `public/brand-assets/logo_dark.svg` - Dark mode logo with "Smarbot IABOT" text
   - `public/brand-assets/logo_thumbnail.svg` - Thumbnail logo with "Smarbot IABOT" text
   - `public/brand-assets/logo_clear.svg` - Clear logo with "Smarbot IABOT" text

2. **Logo Design**:
   - Simple circular design with the specified color palette
   - "Smarbot IABOT" text in the center for brand recognition
   - Consistent design across all logo variations

## Color Customization

1. **SCSS Variables Updated**:
   - Changed `$color-woot` from `#4a90e2` to `#EF731A` (orange)
   - This affects the primary color throughout the application

2. **Custom SCSS File Created**:
   - `app/javascript/dashboard/assets/scss/_custom.scss` - Contains custom color variables
   - Uses the color palette:
     - Primary: #EF731A (orange)
     - Secondary: #000000 (black)
     - Light: #F09209 (yellow)

3. **Custom CSS File Created**:
   - `public/custom-branding.css` - Contains CSS customizations for branding
   - Can be loaded through the DASHBOARD_SCRIPTS configuration option
   - Uses the same color palette as the SCSS files

## Configuration Options

The following configuration options can be used through the Super Admin interface:

1. **Logo Configuration**:
   - LOGO - Path to main logo
   - LOGO_DARK - Path to dark mode logo
   - LOGO_THUMBNAIL - Path to thumbnail logo

2. **Color Configuration**:
   - CONVERSATION_STYLE_CSS - Custom CSS for conversation panel
   - DASHBOARD_SCRIPTS - Custom scripts/CSS that can be loaded

## Color Palette

The new color palette consists of:
- Primary Color: #EF731A (Orange)
- Secondary Color: #000000 (Black)
- Accent Color: #F09209 (Yellow)
- Gray: #6e6f73 (Standard gray for UI elements)

## How to Further Customize

1. **Change Colors**:
   - Modify the color values in `app/javascript/dashboard/assets/scss/_variables.scss`
   - Update the custom colors in `app/javascript/dashboard/assets/scss/_custom.scss`
   - Use the CONVERSATION_STYLE_CSS configuration option for additional CSS customizations

2. **Change Logos**:
   - Replace the SVG files in `public/brand-assets/` with your own designs
   - Ensure SVG format for best quality and scalability

3. **Advanced Customization**:
   - Add custom CSS to `public/custom-branding.css`
   - Load the CSS file through the DASHBOARD_SCRIPTS configuration option
   - Use CSS custom properties (variables) for consistent color management

## Testing

To test the customizations:
1. Refresh your browser
2. Check both light and dark modes
3. Verify logos appear correctly in all views
4. Ensure color changes are applied as expected

## Cost

All changes made are completely free and require no additional payment.