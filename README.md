## Final Project Proposal
1. Arduino-P5.js Interactive Music Controller
![Proposal1](./Proposal1.png)
The proposed project aims to create an interactive music controller that leverages color recognition through Arduino to control virtual piano keys and other musical instruments generated using p5.js. This project offers a creative and engaging way for users to interact with digital music through physical inputs. Arduino Board, Color Recognition Modules, Buttons(change different instruments), p5.js Integration(sound library) are necessary for this project. 

2. GPS-Mapped Action Trajectory Visualization
![Proposal2](./Proposal2.png)
The proposed project aims to merge GPS mapping technology with the recording of movement trajectories using Arduino, and then visualize these trajectories on a map using p5.js. This project will create a visually compelling representation of actions, such as footprints or paths, overlaying them onto a digital map. GPS Module is needed for real-time location tracking.Interactive Elements: Allow users to interact with the visualized trajectory, such as zooming in/out or selecting specific timeframes.

3. Electronic Heartbeat Visualization
![Proposal3](./Proposal3.png)
The proposed project aims to leverage the Arduino pulse beat sensor to detect and identify the user's heartbeat in real-time. This heartbeat data will then be used to control and visualize the beating degree and frequency of an electronic heart displayed through p5.js. The project focuses on creating an interactive and visually engaging electronic health visualization tool. Pulse Beat Sensor is needed to detect real-time heartbeat data. 

## WEEK 12 UPDATE
I decided to chose the first proposal "Interactive Music Controller" for my final project.

**Interactions:**
- **Color Recognition:** Users interact by presenting colored objects to the color recognition modules.
- **Buttons:** Users can press buttons to switch between different musical instruments.
- **Arduino Input:** Arduino collects data from color recognition modules and buttons.
- **p5.js Output:** The collected data is used to control virtual piano keys and other instruments generated using p5.js.

**Data Flow:**
1. **Color Recognition Data:**
   - Produced: Color recognition modules capture color data.
   - Collection: Arduino reads color data through sensors.
   - Transfer: Arduino sends color data to the computer/browser via serial communication.
2. **Button Data:**
   - Produced: Button presses generate data.
   - Collection: Arduino detects button presses.
   - Transfer: Arduino sends button data to the computer/browser via serial communication.
3. **p5.js Output:**
   - Produced: Sound and virtual instrument data generated by p5.js.
   - Transfer: p5.js receives color and button data from Arduino via serial communication.
   - Interaction: p5.js adjusts virtual instrument output based on received data.

**Materials:**
- **Electronic Materials:** Arduino board, color recognition modules, buttons.
- **Sensors:** Color recognition modules.

**User:**
- **Audience:** Anyone interested in interactive music experiences, for example: children, students, musicians...

**Testing:**
- **User Testing:** Gather feedback from users on the usability and engagement of the interactive music controller.
- **Functional Testing:** Ensure color recognition, button inputs, and p5.js interactions work seamlessly.
- **Iterative Testing:** Test and refine the project based on user feedback and technical performance.

**Development:**
- **Challenges:** Integrating color recognition, button input, and p5.js interactions seamlessly might be challenging.
- **Stretch Features:**
  - Multi-color recognition for diverse inputs.
  - Customizable instrument mappings.
- **Backup Plan:** Physical sensor could be more decoratative.

**System diagram**
Here is the system diagram including simple description of input, process and output.
![SD1](./SD.png)
![SD2](./System%20Diagram%20Update.png)

**FSM diagram**
Here is the first draft of FSM, I may add more buttons(instruments) later.
![FSM](./FSM.png)

**Circuit diagram**
Here is the circuit diagram for color sensor function.
![Circuit 1](./Circuit.png)

**external data or library**
Arduino Serial Communication Library
P5.js Library
p5.sound Library

**sensor, output component or mechanism**
Color Recognition Modules: Input component.
Buttons: Input component.
RGB LEDs: Output component.

**Reference images, texts and projects**
Here is the visual reference to show the color.
![Reference](./Reference.jpg)

**how is it related to our readings?**
Using music, sound and visual elements to create a balance between human experiences and media could be a new way to make music education more interesting, and not only limited to one sense(sound), but also could be visualized. 

**how does it connected to society?**
Engagement: Provides an engaging way for individuals to interact with digital music.
Accessibility: Offers a creative musical outlet, potentially accessible to diverse audiences.
Technological Interaction: Represents the integration of physical inputs with digital music, reflecting the evolving relationship between technology and creativity.

