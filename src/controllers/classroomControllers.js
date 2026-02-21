// ClassroomController – Responsibilities
// Manages classrooms, enrollment, and classroom-level data.
// Classroom CRUD

// createClassroom() – Create a new classroom
// getAllClassrooms() – List classrooms (admin/teacher)
// getClassroomById() – Get classroom details
// updateClassroom() – Edit classroom info (name, subject, etc.)
// deleteClassroom() – Delete or archive classroom

// Classroom Membership Management
// addStudentToClassroom() – Enroll a student
// removeStudentFromClassroom() – Remove a student
// addTeacherToClassroom() – Assign teacher
// removeTeacherFromClassroom() – Remove teacher
// getClassroomStudents() – List students in a classroom
// getClassroomTeachers() – List teachers in a classroom

// Enrollment & Access
// generateJoinCode() – Create invite/join code
// joinClassroomByCode() – Join classroom using code
// approveJoinRequest() – Approve pending join requests
// rejectJoinRequest() – Reject join request
// Classroom Content (optional but common)
// createAnnouncement() – Post announcement
// getAnnouncements() – View announcements
// deleteAnnouncement() – Remove announcement
// Classroom Activity & Stats (optional)
// getClassroomStats() – Student count, activity summary
// getAttendance() – Fetch attendance records
// markAttendance() – Record attendance