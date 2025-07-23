# 📝 Rich Text Block Editor

A modern, block-based rich text editor inspired by Notion, built with vanilla JavaScript, HTML, and CSS. This editor allows users to create dynamic content blocks with an intuitive slash command interface.

![Editor Demo](https://via.placeholder.com/800x400/f8f9fa/343a40?text=Rich+Text+Block+Editor)

## ✨ Features

- **Block-Based Editing**: Create content in individual, manageable blocks
- **Slash Commands**: Type `/1` to create heading blocks instantly
- **Dynamic Interface**: Real-time dropdown suggestions and block creation
- **Clean UI**: Modern, minimalist design similar to popular editors
- **Responsive Design**: Works seamlessly across different screen sizes
- **Keyboard Shortcuts**: Efficient navigation and content creation
- **Drag Handles**: Visual indicators for block manipulation

## 🚀 Demo

### Creating Headings
1. Type `/1` in any input field
2. Press `Enter` or click the dropdown option
3. Enter your heading text and press `Enter`
4. A new input block automatically appears below

### Text Blocks
- Simply type regular text and press `Enter` to create new blocks
- Use `/1YourHeadingText` format for quick heading creation

## 🛠️ Installation

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Quick Start
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/rich-text-editor.git
   cd rich-text-editor
   ```

2. **Open in browser**
   ```bash
   # Option 1: Direct file opening
   open index.html
   
   # Option 2: Using Python server
   python -m http.server 8000
   
   # Option 3: Using Node.js server
   npx serve .
   ```

3. **Start editing!**
   - Click in the input field
   - Type `/1` to create a heading
   - Press `Enter` and start typing

## 📖 Usage Guide

### Basic Commands

| Command | Action | Example |
|---------|--------|---------|
| `/1` | Create heading block | Type `/1` → Press Enter → Type "My Heading" |
| `/1Text` | Quick heading | Type `/1Hello World` → Press Enter |
| Regular text | Create text block | Type "Regular paragraph" → Press Enter |

### Keyboard Shortcuts

- **Enter**: Create new block or confirm current action
- **Focus Management**: Automatically focuses on new blocks
- **Navigation**: Use Tab/Shift+Tab between elements

### Interface Elements

- **Drag Handles**: `⋮⋮` icons for visual feedback
- **Search Bar**: Top navigation with project breadcrumbs
- **Status Indicators**: Time tracking and collaboration features
- **Dropdown Menu**: Contextual block type suggestions

## 🏗️ Project Structure

```
rich-text-editor/
├── index.html          # Main HTML structure
├── style.css           # All styling and responsive design
├── index.js            # Core JavaScript functionality
└── README.md           # Project documentation
```

### File Breakdown

- **`index.html`**: Contains the page structure, navigation, and initial input field
- **`style.css`**: Complete styling including dropdown, blocks, and responsive layout
- **`index.js`**: Event handling, block creation, and editor functionality

## ⚙️ Technical Details

### Technologies Used
- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with Flexbox and responsive design
- **Vanilla JavaScript**: No frameworks, pure ES6+ features
- **Font Awesome 6.5.1**: Icon library for UI elements

### Key Functions

```javascript
// Core functionality
addEventListenerToInput(inputElement)     // Attach events to inputs
generateDropdownOptions(inputElement)    // Show/hide suggestions
generateNewNextInput(afterElement)       // Create new blocks
```

### Browser Support
- ✅ Chrome 88+
- ✅ Firefox 85+
- ✅ Safari 14+
- ✅ Edge 88+

## 🎨 Customization

### Styling
Modify `style.css` to customize:
- Color scheme (CSS variables recommended)
- Typography and spacing
- Block styling and animations
- Dropdown appearance

### Functionality
Extend `index.js` to add:
- New block types (quotes, lists, etc.)
- Additional slash commands
- Block manipulation features
- Export/import functionality

### Example: Adding a Quote Block
```javascript
// Add to handleEnterPress function
else if (isDefault && inputValue === '/quote') {
    createQuoteBlock(inputElement);
}
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Test across multiple browsers
- Keep functions small and focused
- Add comments for complex logic
- Maintain mobile responsiveness

## 🐛 Known Issues

- [ ] Multiple dropdowns can appear simultaneously
- [ ] Block reordering not yet implemented
- [ ] Limited block types (only headings and text)

## 🔮 Roadmap

- [ ] **Block Types**: Add quotes, lists, code blocks
- [ ] **Rich Formatting**: Bold, italic, links
- [ ] **Block Manipulation**: Drag and drop reordering
- [ ] **Export Options**: HTML, Markdown, PDF
- [ ] **Collaboration**: Real-time editing support
- [ ] **Themes**: Dark mode and custom themes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [Notion](https://notion.so) and other modern editors
- Font Awesome for the beautiful icons
- The open-source community for inspiration and best practices

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/rich-text-editor/issues) page
2. Create a new issue with:
   - Browser version
   - Steps to reproduce
   - Expected vs actual behavior
3. Contact: [your.email@domain.com](mailto:your.email@domain.com)

---

**Made with ❤️ by [Your Name]**

*Happy editing! 🚀* 