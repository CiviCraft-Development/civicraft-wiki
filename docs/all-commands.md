---
sidebar_position: 2
---

# All Commands

Below is a collection of all commands. Commands are listed alphabetically. If you are looking for commands listed by feature, go to the specific feature's article.

| Command                                  | Permission/Role Needed               | Function                                                                                     |
|------------------------------------------|--------------------------------------|----------------------------------------------------------------------------------------------|
| /doorbells                               | Citizen                              | Brings up the help menu for doorbells                                                        |
| /doorbells set [Sound]                   | Citizen                              | Sets a button as a doorbell                                                                  |
| /doorbells list                          | Citizen                              | Lists available sounds for doorbells                                                         |
| /doorbells remove                        | Citizen                              | Removes a button as a doorbell                                                               |
| /apply                                   | application.submit / Citizen         | Opens the application menu for the player to choose the department or group to apply to.     |
| /apply submit [Group]                    | application.submit.[Group] / Citizen | Submits an application to the specified department or group.                                 |
| /apply status                            | application.status                   | Checks the status of the player's submitted applications.                                    |
| /apply list                              | application.list / Citizen           | Lists all departments or groups available for applications.                                  |
| /apply cancel [Group]                    | application.cancel.[Group]           | Cancels an existing application to the specified department or group.                        |
| /apply review [Player]                   | application.review                   | Allows player to review applications submitted by a specific player.                         |
| /apply approve [Player] [Group] [Reason] | application.approve.[Group]          | Approves an application for a specified player to a specific department or group.            |
| /apply deny [Player] [Group] [Reason]    | application.deny.[Group]             | Denies an application for a specified player to a specific department or group.              |
| /apply notify                            | application.notify / Citizen         | Toggles notifications for application updates and responses.                                 |
| /apply history [Player]                  | application.history                  | Views the application history of a specific player.                                          |
| /apply help                              | application.help                     | Provides help and information on using the application commands.                             |
| /exam                                    | exam.player.access                   | Opens the exam menu for the player to view available exams and their locations.              | 
| /exam reportcard                         | exam.player.reportcard               | Allows the player to review their completed exams and see their scores.                      |
| /exam retake [Player] [ExamID]           | exam.professor.retake                | Allows the player to bypass cooldown and retake a specified exam.                            |
| /exam list                               | exam.professor.list                  | Lists all exams and their current status.                                                    |
| /exam status [Player]                    | exam.professor.status                | Checks the status of the player’s ongoing exam.                                              | 
| /exam results [ExamID] [Player]          | exam.professor.results               | Shows the results of a specified exam.                                                       |
| /exam stats [ExamID]                     | exam.professor.stats                 | Allows professors to view statistics and performance metrics for a specified exam.           |
| /exam grade [Player] [ExamID] [Grade]    | exam.professor.grade                 | Allows professors to manually grade or adjust scores for a specified exam taken by a player. |
| /exam history [Player]                   | exam.professor.history               | Allows professors to view the exam history of a specific player.                             |
| /exam notify                             | exam.player.notify                   | Toggles notifications for exam updates and results if pending.                               |
| /exam help                               | exam.player.help                     | Provides help and information on using the exam commands.                                    |