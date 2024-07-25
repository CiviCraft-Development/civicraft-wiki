# Doorbells

Doorbells are an interactive feature that allow players to add audible cues to doors using buttons. When a button is pressed near a door, it triggers a pleasant chime or sound effect of your choice, enhancing the atmosphere and functionality of your builds.

## How to Use Doorbells

### Adding a Doorbell
To add a doorbell to a door:
1. Place a button within a 1-block radius of the door.
2. Use the command `/doorbells set <SOUND>` to assign a sound to the doorbell.
    - Example: `/doorbells set block.note_block.chime`

#### Available Sounds
The following is a list of all available sounds. This is based on Minecraft-provided sounds although not all are available.

### Managing Your Doorbell
You can manage your doorbells with the following commands:
- `/doorbells list`: See all available sounds you can use for doorbells.
- `/doorbells remove`: Remove the doorbell associated with the button you're looking at.

### Using a Doorbell
Once you've set up your doorbell, you're ready to use it!

#### Managing Access
By default, doorbells can be rang by anyone. To change the permission of who can ring your doorbell:
1. `/bolt lock` to lock the doorbell
2. `/bolt edit add (Player)` to add a player.

Alternatively, doorbells can be set to only be accessed by a specific group or password protected.
- Password protection: `/bolt modify add password (Password)`
- Adding a group: `/bolt modify add group`

For more information about locking items, visit (link)
![Image](https://i.ytimg.com/vi/aU-0exbI3Nc/maxresdefault.jpg)
*Image credit: Cubey (Youtube)*