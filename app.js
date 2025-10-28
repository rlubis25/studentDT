const { useState, useEffect } = React;

// Icon Components (using Font Awesome classes)
const Icon = ({ name, size = 20, className = "" }) => (
    <i className={`fas fa-${name} ${className}`} style={{ fontSize: `${size}px` }}></i>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [showNotifications, setShowNotifications] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showSimulator, setShowSimulator] = useState(false);
  const [showCourseDetail, setShowCourseDetail] = useState(false);
  const [showWhyModal, setShowWhyModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Sample data
  const studentData = {
    name: 'Budi',
    successScore: 78,
    scoreChange: 5,
    engagementStatus: 'Good',
    gpa: 3.45,
    gpaChange: 0.08,
    credits: 98,
    totalCredits: 144,
    graduation: 'June 2026',
    learningStyle: 'Visual + Hands-on'
  };

  const weekProgress = {
    lecturesAttended: 4,
    lecturesTotal: 5,
    assignmentsSubmitted: 2,
    assignmentsTotal: 3,
    labHours: 6.5,
    labGoal: 8
  };

  const courses = [
    { id: 1, name: 'Mobile App Development', status: 'needs-attention', deadline: 'Oct 26 (2 days)', engagement: 'Low', grade: 'B-', icon: '⚠️' },
    { id: 2, name: 'Database Systems', status: 'on-track', deadline: 'Oct 30 (6 days)', engagement: 'High', grade: 'A-', icon: '✅' },
    { id: 3, name: 'Software Engineering', status: 'excellent', deadline: 'Nov 5', engagement: 'High', grade: 'A', icon: '✅' },
    { id: 4, name: 'UI/UX Design', status: 'struggling', deadline: 'Oct 28 (4 days)', engagement: 'Very Low', grade: 'C+', icon: '🔴' }
  ];

  const modules = [
    { id: 1, name: 'Android Basics', status: 'completed', score: 85 },
    { id: 2, name: 'UI Components', status: 'completed', score: 78 },
    { id: 3, name: 'Data Management', status: 'current', score: null },
    { id: 4, name: 'Network Integration', status: 'locked', score: null }
  ];

  const skills = [
    { name: 'Programming', level: 80, status: 'Strong' },
    { name: 'Database', level: 70, status: 'Good' },
    { name: 'UI/UX', level: 40, status: 'Needs improvement' }
  ];

  const notifications = [
    { id: 1, type: 'assignment', title: 'Mobile App Dev due in 2 days', desc: '75% of classmates have started', action: 'View assignment', impact: '+2 score' },
    { id: 2, type: 'study', title: '5 students in Data Structures study group', desc: 'Lab 3, studying now', action: 'Join', impact: 'High' },
    { id: 3, type: 'resource', title: 'Recommended: Database video tutorial', desc: 'Students who struggled found this helpful', action: 'Watch', impact: '+1 score' }
  ];

  const studyGroups = [
    { id: 1, name: 'Data Structures', members: 8, time: 'Wed 4pm', location: 'Library' },
    { id: 2, name: 'Mobile Dev', members: 6, time: 'Thu 3pm', location: 'Lab 3' },
    { id: 3, name: 'UI/UX Design', members: 5, time: 'Tue 2pm', location: 'Design Lab' }
  ];

  const achievements = [
    { id: 1, name: 'Course Completion', icon: '🏆', desc: 'Completed 3 courses' },
    { id: 2, name: 'Lab Master', icon: '🔬', desc: '50+ lab hours' },
    { id: 3, name: 'Project Excellence', icon: '⭐', desc: 'A grade on capstone' },
    { id: 4, name: 'Team Player', icon: '🤝', desc: 'Active in 3 study groups' }
  ];

  // Components
  const Header = () => (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex justify-between items-center sticky top-0 z-40 shadow-lg">
      <div className="flex items-center gap-2">
        <Icon name="graduation-cap" size={24} />
        <span className="font-bold text-lg">UPJ Success</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <button onClick={() => setShowNotifications(!showNotifications)} className="relative p-2 hover:bg-blue-500 rounded-lg transition">
            <Icon name="bell" size={20} />
            <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">3</span>
          </button>
        </div>
        <button className="p-2 hover:bg-blue-500 rounded-lg transition">
          <Icon name="cog" size={20} />
        </button>
      </div>
    </div>
  );

  const NotificationsDrawer = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end fade-in">
      <div className="bg-white w-full max-w-md h-full overflow-y-auto slide-in">
        <div className="p-4 border-b flex justify-between items-center sticky top-0 bg-white z-10">
          <h2 className="font-bold text-lg">Notifications</h2>
          <button onClick={() => setShowNotifications(false)} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
        </div>
        <div className="p-4 space-y-3">
          {notifications.map(notif => (
            <div key={notif.id} className="border rounded-lg p-3 hover:bg-gray-50 transition">
              <div className="flex gap-2 mb-2">
                <span className="text-lg">{notif.type === 'assignment' ? '📋' : notif.type === 'study' ? '👥' : '📚'}</span>
                <div className="flex-1">
                  <p className="font-semibold text-sm">{notif.title}</p>
                  <p className="text-xs text-gray-600">{notif.desc}</p>
                </div>
              </div>
              <div className="flex gap-2 justify-between items-center">
                <button className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200 transition font-semibold">{notif.action}</button>
                <span className="text-xs text-green-600 font-semibold">{notif.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const WhyModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 fade-in">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg text-gray-800">Why this score?</h3>
          <button onClick={() => setShowWhyModal(false)} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-green-50 rounded">
            <span className="text-sm font-semibold text-gray-800">Attendance</span>
            <span className="text-green-600 font-bold">+25</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-green-50 rounded">
            <span className="text-sm font-semibold text-gray-800">Assignment Pace</span>
            <span className="text-green-600 font-bold">+30</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
            <span className="text-sm font-semibold text-gray-800">Lab Hours</span>
            <span className="text-orange-600 font-bold">+23</span>
          </div>
        </div>
        <div className="mt-4 p-3 bg-blue-50 rounded text-sm text-blue-800">
          <p className="font-semibold mb-1">💡 Digital Twin Insight:</p>
          <p>Increasing lab hours to 8/week could boost your score to 81-83.</p>
        </div>
      </div>
    </div>
  );

  const HomePage = () => (
    <div className="pb-24 bg-gray-50">
      {/* Welcome Hero */}
      <div className="bg-white p-4 border-b">
        <p className="text-gray-600 text-sm mb-3">Welcome back, Budi! 📚</p>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 border border-green-200">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-2xl font-bold text-gray-800">78/100</p>
              <p className="text-sm text-green-600 font-semibold">↗️ +5 from last week</p>
            </div>
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Good</div>
          </div>
          <p className="text-xs text-gray-600 mt-2">💡 Consistent lab time boosts score fast (+3–5/week)</p>
          <button onClick={() => setShowWhyModal(true)} className="text-xs text-blue-600 font-semibold mt-2 hover:underline">Why? →</button>
        </div>
      </div>

      {/* Priority Actions */}
      <div className="p-4 space-y-3">
        <h3 className="font-bold text-gray-800 flex items-center gap-2">📌 Priority Actions</h3>
        <div className="space-y-2">
          <div className="bg-white rounded-lg p-3 border-l-4 border-orange-400 pulse-glow">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="font-semibold text-sm">Mobile App Development</p>
                <p className="text-xs text-gray-600">Due: Oct 26 (2 days)</p>
              </div>
              <button className="bg-orange-500 text-white px-3 py-1 rounded text-xs font-semibold hover:bg-orange-600 transition">START</button>
            </div>
            <p className="text-xs text-gray-500">20–30 min • High impact</p>
          </div>

          <div className="bg-white rounded-lg p-3 border-l-4 border-blue-400">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="font-semibold text-sm">Meet Prof. Sari</p>
                <p className="text-xs text-gray-600">Capstone Project Discussion</p>
              </div>
              <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-semibold hover:bg-blue-600 transition">Calendar</button>
            </div>
            <p className="text-xs text-gray-500">30 min • High impact</p>
          </div>

          <div className="bg-white rounded-lg p-3 border-l-4 border-green-400">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="font-semibold text-sm">Data Structures Study Group</p>
                <p className="text-xs text-gray-600">Thu 3pm • Library</p>
              </div>
              <button className="bg-green-500 text-white px-3 py-1 rounded text-xs font-semibold hover:bg-green-600 transition">JOIN</button>
            </div>
            <p className="text-xs text-gray-500">60 min • High impact</p>
          </div>
        </div>
      </div>

      {/* This Week's Progress */}
      <div className="p-4">
        <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-3">📊 This Week's Progress</h3>
        <div className="bg-white rounded-lg p-4 space-y-3 shadow-sm">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-700">Lectures Attended</span>
            <span className="font-bold text-green-600">{weekProgress.lecturesAttended}/{weekProgress.lecturesTotal} ✅</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full transition-all" style={{width: `${(weekProgress.lecturesAttended/weekProgress.lecturesTotal)*100}%`}}></div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-700">Assignments Submitted</span>
            <span className="font-bold text-green-600">{weekProgress.assignmentsSubmitted}/{weekProgress.assignmentsTotal} ✅</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full transition-all" style={{width: `${(weekProgress.assignmentsSubmitted/weekProgress.assignmentsTotal)*100}%`}}></div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-700">Lab Hours</span>
            <span className="font-bold text-orange-600">{weekProgress.labHours}/{weekProgress.labGoal} ⚠️</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-orange-500 h-2 rounded-full transition-all" style={{width: `${(weekProgress.labHours/weekProgress.labGoal)*100}%`}}></div>
          </div>
          <button className="text-xs text-blue-600 font-semibold mt-2 hover:underline">[Book lab slot]</button>
        </div>
      </div>

      {/* Degree Progress */}
      <div className="p-4">
        <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-3">🎯 Degree Progress</h3>
        <div className="bg-white rounded-lg p-4 space-y-3 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-700">Credits Completed</span>
            <span className="font-bold text-blue-600">{studentData.credits}/{studentData.totalCredits} (68%)</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-blue-500 h-3 rounded-full transition-all" style={{width: '68%'}}></div>
          </div>

          <div className="mt-4 pt-4 border-t space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">Expected Graduation</span>
              <span className="font-semibold text-green-600">{studentData.graduation} ✅</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">Current GPA</span>
              <span className="font-semibold text-blue-600">{studentData.gpa} <span className="text-green-600 text-xs">+{studentData.gpaChange}</span></span>
            </div>
          </div>

          <button onClick={() => {setCurrentPage('path'); setShowSimulator(true);}} className="w-full mt-4 bg-blue-500 text-white py-2 rounded font-semibold text-sm hover:bg-blue-600 transition">[Plan next semester]</button>
        </div>
      </div>

      {/* Personalized Recommendations */}
      <div className="p-4">
        <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-3">💡 Personalized Recommendations</h3>
        <div className="bg-white rounded-lg p-4 space-y-3 shadow-sm">
          <div className="text-sm text-gray-600 mb-3">
            <p className="font-semibold text-gray-800 mb-1">Your Learning Style</p>
            <p>{studentData.learningStyle}</p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-start p-2 hover:bg-gray-50 rounded transition">
              <div>
                <p className="text-sm font-semibold text-gray-800">Review Database Systems videos</p>
                <p className="text-xs text-gray-600">Visual learners excel with video content</p>
              </div>
              <button className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold hover:bg-blue-200 transition">Watch</button>
            </div>

            <div className="flex justify-between items-start p-2 hover:bg-gray-50 rounded transition">
              <div>
                <p className="text-sm font-semibold text-gray-800">Join AI Research Lab</p>
                <p className="text-xs text-gray-600">Matches your interests & career goals</p>
              </div>
              <button className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold hover:bg-green-200 transition">Apply</button>
            </div>
          </div>

          <p className="text-xs text-gray-600 italic mt-3">💡 Based on your pattern: 2 short sessions work better than 1 long session</p>
        </div>
      </div>
    </div>
  );

  const CoursesPage = () => (
    <div className="pb-24 bg-gray-50">
      <div className="p-4">
        <h2 className="font-bold text-xl text-gray-800 mb-4">My Courses</h2>
        <div className="space-y-3">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-lg p-4 border-l-4 shadow-sm hover:shadow-md transition" style={{borderColor: course.status === 'excellent' ? '#10b981' : course.status === 'on-track' ? '#3b82f6' : course.status === 'needs-attention' ? '#f97316' : '#ef4444'}}>
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">{course.icon} {course.name}</p>
                  <p className="text-xs text-gray-600 mt-1">Due: {course.deadline}</p>
                </div>
                <span className="text-xs font-bold text-gray-700 bg-gray-100 px-2 py-1 rounded">{course.grade}</span>
              </div>
              <div className="flex justify-between items-center mt-3">
                <span className="text-xs text-gray-600">Engagement: <span className="font-semibold">{course.engagement}</span></span>
                <button onClick={() => {setSelectedCourse(course); setShowCourseDetail(true);}} className="text-xs bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition font-semibold">
                  {course.status === 'struggling' ? 'Get help' : course.status === 'needs-attention' ? 'Catch up' : course.status === 'excellent' ? 'Maintain' : 'Continue'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Detail Modal */}
      {showCourseDetail && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end fade-in">
          <div className="bg-white w-full rounded-t-2xl max-h-[90vh] overflow-y-auto slide-in">
            <div className="p-4 border-b flex justify-between items-center sticky top-0 bg-white z-10">
              <h2 className="font-bold text-lg">{selectedCourse.name}</h2>
              <button onClick={() => setShowCourseDetail(false)} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
            </div>

            {selectedCourse.status === 'struggling' && (
              <div className="p-4 bg-red-50 border-b border-red-200">
                <p className="text-sm font-semibold text-red-800 mb-3">⚠️ You haven't accessed UI/UX materials in 8 days</p>
                <div className="space-y-2">
                  <button className="w-full text-left bg-white border border-red-200 rounded p-3 hover:bg-red-50 transition text-sm">
                    📅 Schedule office hours with Prof. Indra
                  </button>
                  <button className="w-full text-left bg-white border border-red-200 rounded p-3 hover:bg-red-50 transition text-sm">
                    👥 Join UI/UX study group (Tuesdays)
                  </button>
                  <button className="w-full text-left bg-white border border-red-200 rounded p-3 hover:bg-red-50 transition text-sm">
                    📚 Watch recommended tutorials
                  </button>
                  <button className="w-full text-left bg-white border border-red-200 rounded p-3 hover:bg-red-50 transition text-sm">
                    🤝 Request peer tutoring
                  </button>
                </div>
                <p className="text-xs text-gray-600 mt-3 italic">Expected outcome: C+ → B- in 3 weeks with 2 hrs/week</p>
              </div>
            )}

            <div className="p-4">
              <h3 className="font-bold text-gray-800 mb-3">📚 Learning Modules</h3>
              <div className="space-y-2">
                {modules.map(module => (
                  <div key={module.id} className="bg-gray-50 rounded-lg p-3 border">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{module.status === 'completed' ? '✅' : module.status === 'current' ? '🔄' : '🔒'}</span>
                      <span className="font-semibold text-sm text-gray-800">{module.name}</span>
                      {module.score && <span className="text-xs text-green-600 font-bold ml-auto">({module.score}%)</span>}
                    </div>
                    {module.status === 'current' && (
                      <div className="mt-2 text-xs text-gray-600">
                        <p className="mb-2">Based on your quiz, review: <span className="font-semibold">Local Storage concepts</span></p>
                        <div className="flex gap-2 flex-wrap">
                          <button className="bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 transition">📹 Watch video</button>
                          <button className="bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200 transition">✏️ Practice</button>
                          <button className="bg-purple-100 text-purple-700 px-2 py-1 rounded hover:bg-purple-200 transition">❓ Ask</button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-xs text-blue-800"><span className="font-semibold">💡 Digital Twin Insight:</span> Weakest area: Local Storage APIs. 3 practice sets → +12% pass likelihood for Module 3 quiz.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const PathPage = () => (
    <div className="pb-24 bg-gray-50">
      <div className="p-4">
        <h2 className="font-bold text-xl text-gray-800 mb-4">Degree Roadmap</h2>
        
        <div className="bg-white rounded-lg p-4 mb-4 border-l-4 border-blue-500 shadow-sm">
          <p className="text-sm font-semibold text-gray-800 mb-2">📌 AI Recommendation</p>
          <p className="text-sm text-gray-700 mb-3">To graduate on time and boost App Developer profile: Take <span className="font-bold">Cloud Computing (Sem 7)</span> instead of Advanced Algorithms.</p>
          <button onClick={() => setShowSimulator(true)} className="bg-blue-500 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-600 transition">[Simulate]</button>
        </div>

        <h3 className="font-bold text-gray-800 mb-3">Semester Timeline</h3>
        <div className="space-y-2">
          {[
            { sem: 'Sem 1-3', courses: 'Completed (48 credits)', color: 'green', icon: '✅' },
            { sem: 'Sem 4', courses: 'Current (18 credits, 68% complete)', color: 'blue', icon: '🔄' },
            { sem: 'Sem 5', courses: 'Upcoming (20 credits planned)', color: 'gray', icon: '📅' },
            { sem: 'Sem 6', courses: 'Upcoming (18 credits planned)', color: 'gray', icon: '📅' },
            { sem: 'Sem 7', courses: 'Final (16 credits planned)', color: 'gray', icon: '🎓' }
          ].map((item, idx) => (
            <div key={idx} className={`rounded-lg p-3 border-l-4 shadow-sm ${item.color === 'green' ? 'bg-green-50 border-green-500' : item.color === 'blue' ? 'bg-blue-50 border-blue-500' : 'bg-gray-50 border-gray-300'}`}>
              <p className="font-semibold text-sm text-gray-800">{item.icon} {item.sem}</p>
              <p className="text-xs text-gray-600">{item.courses}</p>
            </div>
          ))}
        </div>

        {showSimulator && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 fade-in">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4">What-If Simulator</h3>
              <div className="space-y-3 mb-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">Target Role</label>
                  <select className="w-full border rounded p-2 text-sm">
                    <option>Mobile Developer</option>
                    <option>Full-stack Developer</option>
                    <option>Data Engineer</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">Swap Course</label>
                  <select className="w-full border rounded p-2 text-sm">
                    <option>Cloud Computing</option>
                    <option>Advanced Algorithms</option>
                    <option>Machine Learning</option>
                  </select>
                </div>
              </div>
              <div className="bg-blue-50 rounded p-3 mb-4 text-sm">
                <p className="font-semibold text-blue-900 mb-2">📊 Predicted Outcomes:</p>
                <ul className="text-xs text-blue-800 space-y-1">
                  <li>✅ Graduation: June 2026 (on time)</li>
                  <li>📈 Mobile Dev match: 88% (+3%)</li>
                  <li>⚠️ Workload: 16 credits (manageable)</li>
                  <li>📚 GPA impact: -0.05 (minimal)</li>
                </ul>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setShowSimulator(false)} className="flex-1 bg-gray-200 text-gray-800 py-2 rounded font-semibold hover:bg-gray-300 transition">Cancel</button>
                <button className="flex-1 bg-blue-500 text-white py-2 rounded font-semibold hover:bg-blue-600 transition">Apply Plan</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const CareerPage = () => (
    <div className="pb-24 bg-gray-50">
      <div className="p-4">
        <h2 className="font-bold text-xl text-gray-800 mb-4">Career Readiness</h2>

        {/* Career Score */}
        <div className="bg-white rounded-lg p-4 mb-4 border-l-4 border-purple-500 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-gray-800">Career Preparation Score</p>
            <span className="text-2xl font-bold text-purple-600">72/100</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-purple-500 h-3 rounded-full transition-all" style={{width: '72%'}}></div>
          </div>
          <p className="text-xs text-gray-600 mt-2">↗️ +5 from last month • Next 10-point plan available</p>
        </div>

        {/* Skills Profile */}
        <h3 className="font-bold text-gray-800 mb-3">Skills Profile</h3>
        <div className="bg-white rounded-lg p-4 mb-4 space-y-4 shadow-sm">
          {skills.map((skill, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-gray-800">{skill.name}</span>
                <span className={`text-xs font-semibold ${skill.level >= 70 ? 'text-green-600' : skill.level >= 50 ? 'text-orange-600' : 'text-red-600'}`}>{skill.status}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`h-2 rounded-full transition-all ${skill.level >= 70 ? 'bg-green-500' : skill.level >= 50 ? 'bg-orange-500' : 'bg-red-500'}`} style={{width: `${skill.level}%`}}></div>
              </div>
              <p className="text-xs text-gray-600 mt-1">{skill.level}% • Measured by projects, grades, badges</p>
            </div>
          ))}
        </div>

        {/* Industry Alignment */}
        <h3 className="font-bold text-gray-800 mb-3">Industry Alignment</h3>
        <div className="bg-white rounded-lg p-4 mb-4 space-y-3 shadow-sm">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-800">Mobile Developer</span>
              <span className="text-sm font-bold text-green-600">85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full transition-all" style={{width: '85%'}}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-800">Full-stack Developer</span>
              <span className="text-sm font-bold text-blue-600">72%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full transition-all" style={{width: '72%'}}></div>
            </div>
          </div>
        </div>

        {/* Recommended Actions */}
        <h3 className="font-bold text-gray-800 mb-3">Recommended Actions</h3>
        <div className="space-y-2">
          <div className="bg-white rounded-lg p-3 border-l-4 border-orange-400 shadow-sm">
            <p className="text-sm font-semibold text-gray-800 mb-2">Complete 2 more mobile app projects</p>
            <div className="flex gap-2">
              <button className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded hover:bg-orange-200 transition">See ideas</button>
              <button className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded hover:bg-orange-200 transition">Template repo</button>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 border-l-4 border-red-400 shadow-sm">
            <p className="text-sm font-semibold text-gray-800 mb-2">Improve UI/UX skills</p>
            <button className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded hover:bg-red-200 transition">Enroll in course</button>
          </div>

          <div className="bg-white rounded-lg p-3 border-l-4 border-green-400 shadow-sm">
            <p className="text-sm font-semibold text-gray-800 mb-2">Start internship search</p>
            <p className="text-xs text-gray-600 mb-2">Optimal timing: Dec 2025</p>
            <div className="flex gap-2">
              <button className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200 transition">Set reminders</button>
              <button className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200 transition">CV checklist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SocialPage = () => (
    <div className="pb-24 bg-gray-50">
      <div className="p-4">
        <h2 className="font-bold text-xl text-gray-800 mb-4">Community & Collaboration</h2>

        {/* Study Groups */}
        <h3 className="font-bold text-gray-800 mb-3">📚 Study Groups</h3>
        <div className="space-y-2 mb-4">
          {studyGroups.map(group => (
            <div key={group.id} className="bg-white rounded-lg p-3 border shadow-sm hover:shadow-md transition">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-semibold text-sm text-gray-800">{group.name}</p>
                  <p className="text-xs text-gray-600">{group.members} members • {group.time} • {group.location}</p>
                </div>
                <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-semibold hover:bg-blue-600 transition">Join</button>
              </div>
            </div>
          ))}
        </div>

        {/* Peer Insights */}
        <h3 className="font-bold text-gray-800 mb-3">👥 Peer Insights</h3>
        <div className="bg-white rounded-lg p-4 mb-4 border-l-4 border-blue-500 shadow-sm">
          <p className="text-sm font-semibold text-gray-800 mb-3">Your engagement is higher than 65% of Informatics students</p>
          <div className="bg-blue-50 rounded p-3 text-sm">
            <p className="font-semibold text-blue-900 mb-2">Top 3 habits you share with high performers:</p>
            <ul className="text-xs text-blue-800 space-y-1">
              <li>✅ Consistent lab attendance (3+ hrs/week)</li>
              <li>✅ Early assignment submissions</li>
              <li>✅ Active in study groups</li>
            </ul>
          </div>
          <button className="text-xs text-blue-600 font-semibold mt-3 hover:underline">[View detailed comparison]</button>
        </div>

        {/* Achievements */}
        <h3 className="font-bold text-gray-800 mb-3">🏆 Achievements</h3>
        <div className="grid grid-cols-2 gap-2">
          {achievements.map(achievement => (
            <div key={achievement.id} className="bg-white rounded-lg p-3 border text-center shadow-sm hover:shadow-md transition">
              <p className="text-2xl mb-1">{achievement.icon}</p>
              <p className="text-xs font-semibold text-gray-800">{achievement.name}</p>
              <p className="text-xs text-gray-600 mt-1">{achievement.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      {showNotifications && <NotificationsDrawer />}
      {showWhyModal && <WhyModal />}

      {/* Page Content */}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'courses' && <CoursesPage />}
      {currentPage === 'path' && <PathPage />}
      {currentPage === 'career' && <CareerPage />}
      {currentPage === 'social' && <SocialPage />}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-20 shadow-lg z-30">
        <button onClick={() => setCurrentPage('home')} className={`flex flex-col items-center justify-center w-full h-full gap-1 ${currentPage === 'home' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition`}>
          <Icon name="home" size={24} />
          <span className="text-xs font-semibold">Home</span>
        </button>
        <button onClick={() => setCurrentPage('courses')} className={`flex flex-col items-center justify-center w-full h-full gap-1 ${currentPage === 'courses' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition`}>
          <Icon name="book-open" size={24} />
          <span className="text-xs font-semibold">Courses</span>
        </button>
        <button onClick={() => setCurrentPage('path')} className={`flex flex-col items-center justify-center w-full h-full gap-1 ${currentPage === 'path' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition`}>
          <Icon name="map" size={24} />
          <span className="text-xs font-semibold">Path</span>
        </button>
        <button onClick={() => setCurrentPage('career')} className={`flex flex-col items-center justify-center w-full h-full gap-1 ${currentPage === 'career' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition`}>
          <Icon name="briefcase" size={24} />
          <span className="text-xs font-semibold">Career</span>
        </button>
        <button onClick={() => setCurrentPage('social')} className={`flex flex-col items-center justify-center w-full h-full gap-1 ${currentPage === 'social' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition`}>
          <Icon name="users" size={24} />
          <span className="text-xs font-semibold">Social</span>
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
