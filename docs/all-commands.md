---
sidebar_position: 2
---

# All Commands

Below is a collection of all commands. Commands are listed alphabetically. If you are looking for commands listed by feature, go to the specific feature's article.

To identify the role associated with specific commands, examine the text positioned between the command name and the action. For instance, exam.professor.status is executable by Professors but not by Citizens. Additionally, the presence of .player. signifies that the command is accessible to all users. Commands containing citizen are restricted to individuals who have completed and passed the Citizenship exam. Any command featuring text within brackets indicates multiple potential permission values, but none of these values permit execution by Citizens.

| Command                                                 | Permission Needed           | Function                                                                                     |
|---------------------------------------------------------|-----------------------------|----------------------------------------------------------------------------------------------|
| /doorbells                                              | Citizen                     | Brings up the help menu for doorbells                                                        |
| /doorbells set [Sound]                                  | Citizen                     | Sets a button as a doorbell                                                                  |
| /doorbells list                                         | Citizen                     | Lists available sounds for doorbells                                                         |
| /doorbells remove                                       | Citizen                     | Removes a button as a doorbell                                                               |
| /apply                                                  | application.submit          | Opens the application menu for the player to choose the department or group to apply to.     |
| /apply submit [Group]                                   | application.submit.[Group]  | Submits an application to the specified department or group.                                 |
| /apply status                                           | application.status          | Checks the status of the player's submitted applications.                                    |
| /apply list                                             | application.list            | Lists all departments or groups available for applications.                                  |
| /apply cancel [Group]                                   | application.cancel.[Group]  | Cancels an existing application to the specified department or group.                        |
| /apply review [Player]                                  | application.review          | Allows player to review applications submitted by a specific player.                         |
| /apply approve [Player] [Group] [Reason]                | application.approve.[Group] | Approves an application for a specified player to a specific department or group.            |
| /apply deny [Player] [Group] [Reason]                   | application.deny.[Group]    | Denies an application for a specified player to a specific department or group.              |
| /apply notify                                           | application.notify          | Toggles notifications for application updates and responses.                                 |
| /apply history [Player]                                 | application.history         | Views the application history of a specific player.                                          |
| /apply help                                             | application.help            | Provides help and information on using the application commands.                             |
| /exam                                                   | exam.citizen.access         | Opens the exam menu for the player to view available exams and their locations.              | 
| /exam reportcard                                        | exam.citizen.reportcard     | Allows the player to review their completed exams and see their scores.                      |
| /exam retake [Player] [ExamID]                          | exam.professor.retake       | Allows the player to bypass cooldown and retake a specified exam.                            |
| /exam list                                              | exam.professor.list         | Lists all exams and their current status.                                                    |
| /exam status [Player]                                   | exam.professor.status       | Checks the status of the player’s ongoing exam.                                              | 
| /exam results [ExamID] [Player]                         | exam.professor.results      | Shows the results of a specified exam.                                                       |
| /exam stats [ExamID]                                    | exam.professor.stats        | Allows professors to view statistics for a specified exam.                                   |
| /exam grade [Player] [ExamID] [Grade]                   | exam.professor.grade        | Allows professors to manually grade or adjust scores for a specified exam taken by a player. |
| /exam history [Player]                                  | exam.professor.history      | Allows professors to view the exam history of a specific player.                             |
| /exam notify                                            | exam.citizen.notify         | Toggles notifications for exam updates and results if pending.                               |
| /exam help                                              | exam.citizen.help           | Provides help and information on using the exam commands.                                    |
| /class                                                  | class.citizen.access        | Opens the class menu for the player to view available live and automated classes.            |
| /class join [classID]                                   | class.citizen.join          | Joins a specified live class.                                                                |
| /class leave [classID]                                  | class.citizen.leave         | Leaves a specified live class.                                                               |
| /class list                                             | class.citizen.list          | Lists all available live and automated classes that the player can join or take.             |
| /class start [classID]                                  | class.citizen.start         | Starts an automated class for the player.                                                    |
| /class progress [classID]                               | class.professor.progress    | Checks the player's progress in an automated class.                                          |
| /class complete [classID]                               | class.professor.complete    | Marks an automated class as complete if the player has met all requirements.                 |
| /class schedule                                         | class.professor.schedule    | Displays the schedule of upcoming live classes.                                              |
| /class create [classID]                                 | class.professor.create      | Allows professors to create a new class (live or automated).                                 |
| /class edit [classID]                                   | class.professor.edit        | Allows professors to edit the details and content of an existing class.                      |
| /class delete [classID]                                 | class.professor.delete      | Allows professors to delete an existing class.                                               |
| /class enroll [player] [classID]                        | class.professor.enroll      | Allows professors to manually enroll a player in a specified class.                          |
| /class unenroll [player] [classID]                      | class.professor.unenroll    | Allows professors to manually unenroll a player from a specified class.                      |
| /class notify                                           | class.citizen.notify        | Toggles notifications for class updates and announcements.                                   |
| /class help                                             | class.citizen.help          | Provides help and information on using the class commands.                                   |
| /class stats [classID]                                  | class.professor.stats       | Allows professors to view statistics and performance metrics for a specified class.          |
| /class history [player]                                 | class.professor.history     | Allows professors to view the class history of a specific player.                            |
| /class grade [player] [classID] [grade]                 | class.professor.grade       | Allows professors to grade assignments for a specified player in a specified class.          |
| /class assignment create [classID] [assignmentID]       | class.professor.assignment  | Allows professors to create a new assignment for a class.                                    |
| /class assignment delete [classID] [assignmentID]       | class.professor.assignment  | Allows professors to delete an assignment from a class.                                      |
| /class assignment grade [player] [assignmentID] [grade] | class.professor.assignment  | Allows professors to grade a specific assignment for a specific player.                      |
