---
sidebar_position: 2
---

# All Commands

Below is a collection of all commands. Commands are listed alphabetically. If you are looking for commands listed by feature, go to the specific feature's article.

To identify the role associated with specific commands, examine the text positioned between the command name and the action. For instance, exam.professor.status is executable by Professors but not by Citizens. Additionally, the presence of .player. signifies that the command is accessible to all users. Commands containing citizen are restricted to individuals who have completed and passed the Citizenship exam. Any command featuring text within brackets indicates multiple potential permission values, but none of these values permit execution by Citizens.

| Command                                                    | Permission Needed                 | Function                                                                                                        |
|------------------------------------------------------------|-----------------------------------|-----------------------------------------------------------------------------------------------------------------|
| Command                                                    | Permission                        | Use                                                                                                             |
| ---------------------------------------------------------- | --------------------------------- | -----------------------------------------------------------------------------------------------                 |
| /apply                                                     | application.submit                | Opens the application menu for the player to choose the department or group to apply to.                        |
| /apply approve [Player] [Group] [Reason]                   | application.approve.[Group]       | Approves an application for a specified player to a specific department or group.                               |
| /apply cancel [Group]                                      | application.cancel.[Group]        | Cancels an existing application to the specified department or group.                                           |
| /apply deny [Player] [Group] [Reason]                      | application.deny.[Group]          | Denies an application for a specified player to a specific department or group.                                 |
| /apply help                                                | application.help                  | Provides help and information on using the application commands.                                                |
| /apply history [Player]                                    | application.history               | Views the application history of a specific player.                                                             |
| /apply list                                                | application.list                  | Lists all departments or groups available for applications.                                                     |
| /apply notify                                              | application.notify                | Toggles notifications for application updates and responses.                                                    |
| /apply review [Player]                                     | application.review                | Allows player to review applications submitted by a specific player.                                            |
| /apply status                                              | application.status                | Checks the status of the player's submitted applications.                                                       |
| /apply submit [Group]                                      | application.submit.[Group]        | Submits an application to the specified department or group.                                                    |
| /class                                                     | class.citizen.access              | Opens the class menu for the player to view available live and automated classes.                               |
| /class join [classID]                                      | class.citizen.join                | Joins a specified live class.                                                                                   |
| /class leave [classID]                                     | class.citizen.leave               | Leaves a specified live class.                                                                                  |
| /class list                                                | class.citizen.list                | Lists all available live and automated classes that the player can join or take.                                |
| /class notify                                              | class.citizen.notify              | Toggles notifications for class updates and announcements.                                                      |
| /class start [classID]                                     | class.citizen.start               | Starts an automated class for the player.                                                                       |
| /class help                                                | class.citizen.help                | Provides help and information on using the class commands.                                                      |
| /class complete [classID]                                  | class.professor.complete          | Marks an automated class as complete if the player has met all requirements.                                    |
| /class create [classID]                                    | class.professor.create            | Allows professors to create a new class (live or automated).                                                    |
| /class delete [classID]                                    | class.professor.delete            | Allows professors to delete an existing class.                                                                  |
| /class edit [classID]                                      | class.professor.edit              | Allows professors to edit the details and content of an existing class.                                         |
| /class enroll [player] [classID]                           | class.professor.enroll            | Allows professors to manually enroll a player in a specified class.                                             |
| /class grade [player] [classID] [grade]                    | class.professor.grade             | Allows professors to grade assignments for a specified player in a specified class.                             |
| /class history [player]                                    | class.professor.history           | Allows professors to view the class history of a specific player.                                               |
| /class assignment create [classID] [assignmentID]          | class.professor.assignment        | Allows professors to create a new assignment for a class.                                                       |
| /class assignment delete [classID] [assignmentID]          | class.professor.assignment        | Allows professors to delete an assignment from a class.                                                         |
| /class assignment grade [player] [assignmentID] [grade]    | class.professor.assignment        | Allows professors to grade a specific assignment for a specific player.                                         |
| /class progress [classID]                                  | class.professor.progress          | Checks the player's progress in an automated class.                                                             |
| /class schedule                                            | class.professor.schedule          | Displays the schedule of upcoming live classes.                                                                 |
| /class stats [classID]                                     | class.professor.stats             | Allows professors to view statistics and performance metrics for a specified class.                             |
| /class unenroll [player] [classID]                         | class.professor.unenroll          | Allows professors to manually unenroll a player from a specified class.                                         |
| /doorbells                                                 | Citizen                           | Brings up the help menu for doorbells.                                                                          |
| /doorbells list                                            | Citizen                           | Lists available sounds for doorbells.                                                                           |
| /doorbells remove                                          | Citizen                           | Removes a button as a doorbell.                                                                                 |
| /doorbells set [Sound]                                     | Citizen                           | Sets a button as a doorbell.                                                                                    |
| /exam                                                      | exam.citizen.access               | Opens the exam menu for the player to view available exams and their locations.                                 |
| /exam help                                                 | exam.citizen.help                 | Provides help and information on using the exam commands.                                                       |
| /exam notify                                               | exam.citizen.notify               | Toggles notifications for exam updates and results if pending.                                                  |
| /exam reportcard                                           | exam.citizen.reportcard           | Allows the player to review their completed exams and see their scores.                                         |
| /exam grade [Player] [ExamID] [Grade]                      | exam.professor.grade              | Allows professors to manually grade or adjust scores for a specified exam taken by a player.                    |
| /exam history [Player]                                     | exam.professor.history            | Allows professors to view the exam history of a specific player.                                                |
| /exam list                                                 | exam.professor.list               | Lists all exams and their current status.                                                                       |
| /exam results [ExamID] [Player]                            | exam.professor.results            | Shows the results of a specified exam.                                                                          |
| /exam retake [Player] [ExamID]                             | exam.professor.retake             | Allows the player to bypass cooldown and retake a specified exam.                                               |
| /exam stats [ExamID]                                       | exam.professor.stats              | Allows professors to view statistics for a specified exam.                                                      |
| /exam status [Player]                                      | exam.professor.status             | Checks the status of the player’s ongoing exam.                                                                 |
| /group                                                     | group.citizen.access              | Opens the group menu for the player to view information about groups.                                           |
| /group addtag [groupName] [tag]                            | group.citizen.addtag              | Adds a tag to describe a specified group.                                                                       |
| /group announce [groupName] [announcement]                 | group.citizen.announce            | Shares an announcement to the specified group.                                                                  |
| /group create [groupName]                                  | group.citizen.create              | Creates a new group with the specified name.                                                                    |
| /group delete [groupName]                                  | group.citizen.delete              | Deletes an existing group with the specified name.                                                              |
| /group demote [player] [groupName]                         | group.citizen.demote              | Demotes a player to a lower rank within a specified group.                                                      |
| /group info [groupName]                                    | group.citizen.info                | Displays detailed information about a specified group, including description, discord, tags, and meeting times. |
| /group invite [player] [groupName]                         | group.citizen.invite              | Invites a player to join a specified group.                                                                     |
| /group join [groupName]                                    | group.citizen.join                | Joins or requests to join a specified group.                                                                    |
| /group kick [player] [groupName]                           | group.citizen.kick                | Removes a player from a specified group.                                                                        |
| /group leave [groupName]                                   | group.citizen.leave               | Leaves a specified group.                                                                                       |
| /group list                                                | group.citizen.list                | Lists all available groups.                                                                                     |
| /group notify                                              | group.citizen.notify              | Toggles notifications for group updates and announcements.                                                      |
| /group promote [player] [groupName]                        | group.citizen.promote             | Promotes a player to a higher rank within a specified group.                                                    |
| /group search [tag]                                        | group.citizen.search              | Searches for groups based on a specified tag.                                                                   |
| /group setdesc [groupName] [desc]                          | group.citizen.setdesc             | Sets or updates the description for a specified group.                                                          |
| /group setdiscord [groupName] [discordLink]                | group.citizen.share               | Sets or updates the discord link for a specified group.                                                         |
| /group setmeeting [groupName] [time] [location]            | group.citizen.setmeeting          | Sets or updates the meeting time and location for a specified group.                                            |
| /group help                                                | group.citizen.help                | Provides help and information on using the group commands.                                                      |
| /group removetag [groupName] [tag]                         | group.citizen.removetag           | Removes a tag from a specified group.                                                                           |
