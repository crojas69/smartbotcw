# Customizing Chatwoot Logos and Colors

This guide explains how to customize the logos and colors in your Chatwoot installation for less than $1.

## Logo Customization

Chatwoot supports customizing logos through the Super Admin interface. You can replace the default Chatwoot logos with your own brand logos.

### Steps to Customize Logos:

1. **Prepare Your Logo Files**:
   - Create your logo in SVG format for best quality
   - Prepare different versions for various use cases:
     - `logo.svg` - Main logo for light backgrounds
     - `logo_dark.svg` - Logo for dark backgrounds
     - `logo_thumbnail.svg` - Small version for favicons (512x512px recommended)

2. **Upload Logos via Super Admin**:
   - Navigate to your Chatwoot installation
   - Log in as a Super Admin
   - Go to Settings > Configure Settings
   - Select the "Branding" section (or use the general configuration)
   - Update the following configuration options:
     - `LOGO` - Path to your main logo
     - `LOGO_DARK` - Path to your dark mode logo
     - `LOGO_THUMBNAIL` - Path to your thumbnail logo

3. **Alternative Method - Direct File Replacement**:
   - Replace files in the `public/brand-assets/` directory:
     - `public/brand-assets/logo.svg`
     - `public/brand-assets/logo_dark.svg`
     - `public/brand-assets/logo_thumbnail.svg`

## Color Customization

Chatwoot allows color customization through CSS variables and the CONVERSATION_STYLE_CSS configuration option.

### Steps to Customize Colors:

1. **Using CONVERSATION_STYLE_CSS Configuration**:
   - Navigate to Super Admin > Configure Settings
   - Find the "CONVERSATION_STYLE_CSS" option
   - Add your custom CSS to change colors, for example:
     ```css
     :root {
       --primary-color: #your-brand-color;
       --secondary-color: #your-secondary-color;
     }
     ```
   - This CSS will be applied to the conversation panel

2. **Advanced Color Customization**:
   - For more extensive color changes, you can:
     - Modify the SCSS variables in `app/javascript/dashboard/assets/scss/_variables.scss`
     - Add custom CSS in the DASHBOARD_SCRIPTS configuration option
     - Use CSS custom properties to override default colors

## Testing Your Customization

After making changes:
1. Refresh your browser
2. Check both light and dark modes
3. Verify logos appear correctly in all views
4. Ensure color changes are applied as expected

## Tips for Best Results

1. **Logo Design**:
   - Use SVG format for scalability
   - Keep logos simple and recognizable
   - Test logos in both light and dark modes

2. **Color Scheme**:
   - Choose colors that maintain good contrast for readability
   - Test your color scheme for accessibility
   - Consider how colors will look in both light and dark modes

3. **Performance**:
   - Optimize SVG files to reduce load times
   - Use CSS variables for consistent color management

## Troubleshooting

- If logos don't appear, check file paths and permissions
- If colors don't change, ensure CSS syntax is correct
- Clear browser cache after making changes
- Check browser developer tools for any errors

By following these steps, you can fully customize Chatwoot's appearance to match your brand identity for less than $1.