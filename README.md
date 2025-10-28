# UPJ Student Success Platform - Prototype

A fully interactive, mobile-first prototype for the UPJ Student Success Platform designed for Budi, a third-year Informatics student.

## Features

### 🏠 Home Dashboard

* Student Success Score with engagement meter

* Priority Actions with time/impact estimates

* Weekly Progress tracking

* Degree Progress visualization

* Personalized Recommendations

### 📚 Courses

* Course list with status indicators

* Predicted grades and engagement levels

* Adaptive learning modules

* Risk alerts with actionable rescue routes

* Digital Twin insights

### 🗺️ Degree Path

* Semester timeline visualization

* AI-powered course recommendations

* What-If Simulator for course planning

* Graduation timeline tracking

### 💼 Career Readiness

* Career Preparation Score

* Skills Profile with progress bars

* Industry Alignment metrics

* Actionable career recommendations

### 👥 Social & Collaboration

* Study Groups directory

* Peer Comparison insights

* Achievement badges

* Community engagement

## Design Principles

✅ **Emotionally Intelligent**: Reassuring tone, micro-wins, gentle escalation\
✅ **Illustrated**: Emoji-based visual metaphors, friendly status indicators\
✅ **Digital Twin Ready**: Every card shows "why" explanations and confidence levels\
✅ **Mobile-First**: Bottom navigation, thumb-friendly buttons, card-based layout\
✅ **Accessible**: Clear contrast, readable fonts, semantic structure

## Deployment Options

### Option 1: GitHub Pages (Recommended - Free & Easy)

1. **Create a GitHub account** (if you don't have one):

* Go to [https://github.com](https://github.com)

* Sign up for free

1. **Create a new repository**:

* Click the "+" icon in the top right

* Select "New repository"

* Name it: `upj-student-platform`

* Make it Public

* Click "Create repository"

1. **Upload files**:

* Click "uploading an existing file"

* Drag and drop all three files:

  * `index.html`

  * `app.js`

  * `README.md`

* Click "Commit changes"

1. **Enable GitHub Pages**:

* Go to repository Settings

* Scroll to "Pages" section (left sidebar)

* Under "Source", select "main" branch

* Click "Save"

* Wait 1-2 minutes

1. **Access your site**:

* Your site will be live at: `https://[your-username].github.io/upj-student-platform/`

### Option 2: Netlify (Free & Fast)

1. **Go to Netlify**:

* Visit [https://www.netlify.com](https://www.netlify.com)

* Sign up for free (use GitHub account)

1. **Deploy**:

* Click "Add new site" → "Deploy manually"

* Drag and drop the folder containing all files

* Wait 30 seconds

1. **Access your site**:

* You'll get a URL like: `https://random-name-123.netlify.app`

* You can customize the URL in Site settings

### Option 3: Vercel (Free & Professional)

1. **Go to Vercel**:

* Visit [https://vercel.com](https://vercel.com)

* Sign up for free

1. **Deploy**:

* Click "Add New" → "Project"

* Import from GitHub (or drag & drop files)

* Click "Deploy"

1. **Access your site**:

* You'll get a URL like: `https://upj-student-platform.vercel.app`

### Option 4: Local Testing (No Internet Required)

1. **Save all files** in a folder named `upj-student-platform`

2. **Open `index.html`** in any web browser (Chrome, Firefox, Safari, Edge)

3. **That's it!** The prototype will run locally

## File Structure

```
upj-student-platform/
├── index.html          # Main HTML file with styles
├── app.js             # React application with all components
└── README.md          # This file
```

## Browser Compatibility

* ✅ Chrome (recommended)

* ✅ Firefox

* ✅ Safari

* ✅ Edge

* ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Mobile Testing

To test on mobile:

1. Deploy using any option above

2. Open the URL on your phone

3. Or use Chrome DevTools (F12) → Toggle device toolbar (Ctrl+Shift+M)

## Customization

### Change Colors

Edit the Tailwind classes in `app.js`:

* Blue: `bg-blue-500`, `text-blue-600`

* Green: `bg-green-500`, `text-green-600`

* Orange: `bg-orange-500`, `text-orange-600`

### Change Data

Edit the sample data objects in `app.js`:

* `studentData` - Student information

* `courses` - Course list

* `skills` - Skills profile

* `notifications` - Notification list

### Add Features

The React components are modular and easy to extend. Each page is a separate component:

* `HomePage()`

* `CoursesPage()`

* `PathPage()`

* `CareerPage()`

* `SocialPage()`

## Support

For issues or questions:

1. Check browser console (F12) for errors

2. Ensure all files are in the same folder

3. Try a different browser

4. Clear browser cache (Ctrl+Shift+Delete)

## License

This prototype is for educational and demonstration purposes.

---

**Built with**: React 18, Tailwind CSS, Font Awesome\
**Design**: Mobile-first, responsive, accessible\
**Status**: Interactive prototype with sample data
