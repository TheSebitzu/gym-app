# Gym App

![MIT License](https://img.shields.io/badge/license-MIT-green)
![PWA Ready](https://img.shields.io/badge/PWA-Ready-blue)
![Offline Capable](https://img.shields.io/badge/Offline-Yes-brightgreen)
![Mobile First](https://img.shields.io/badge/Mobile--First-%23ff9800)
![No Dependencies](https://img.shields.io/badge/No%20Dependencies-✔️-lightgrey)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Hosted-blueviolet)
![Built With JavaScript](https://img.shields.io/badge/Built%20With-JavaScript-yellow)
![HTML5](https://img.shields.io/badge/HTML5-%23e34c26)
![CSS3](https://img.shields.io/badge/CSS3-%233572b0)

A web application for tracking your workout progress at the gym, designed primarily for mobile phones.

---

## 🚀 Try it now!

👉 [Open Gym App on GitHub Pages](https://thesebitzu.github.io/gym-app/)

---

## Features

- Simple and intuitive user interface
- Fully works offline – no internet connection required after first load
- Can be installed on your homescreen and used like a native app
- Track maximum weight and repetitions for each exercise
- Skipped exercises are visible on the current workout page
- Skip workouts, optionally, during a workout
- Cannot submit an exercise without entering both weight and repetitions
- View detailed workout history, including weights, reps, and dates for each workout
- Reset your progress if you wish to

## Screenshots

*Current Exercise - track your progress in real time and skip exercises if needed*  
![Current Exercise](https://github.com/user-attachments/assets/e7b46bca-ba81-4706-a5fe-3caae7332f34)

*Homepage - quick access to start a workout or view workout history*  
![Homepage](https://github.com/user-attachments/assets/8099151e-1836-4772-ae7e-e2e61cc0202e)

*Workout History - see all your past workouts, weights, reps, and dates*  
![Workout History](https://github.com/user-attachments/assets/71815066-5743-4ec9-aa4a-47dd98d20c83)

## Tech Stack

- **Frontend:** HTML5, CSS3
- **Logic:** JavaScript (no frontend framework)
- **Persistence:** LocalStorage (client-side)
- **PWA Features:** Service Workers, Web Manifest (for offline usage and installability)
- **Deployment:** GitHub Pages

## Suggestions & Limitations

- Adding or editing exercises is only possible by modifying the source code directly. If you’d like this feature to be easier to use, feel free to open an issue or suggestion!
- If you use the app through my GitHub Pages deployment, all your data is stored only in your own browser's local storage and does not impact anyone else. Feel free to use it as you wish!
- If you want to make changes and use the app offline, simply clone the repository, make your changes, and then host it with your own GitHub Pages. This way you have a fully personalized and offline-capable version.

## Getting Started

To run the app locally:

```bash
git clone https://github.com/TheSebitzu/gym-app.git
cd gym-app
# Open index.html in your browser
```

Or use your own [GitHub Pages](https://pages.github.com/) deployment for a fully personalized and offline-capable version.

## Contributing

Pull requests are welcome! Feel free to open an issue or contact me if you have questions, suggestions, or want to report a bug. If you need help with modifying the code, you can contact me as well.

## Special Thanks

Special thanks to Jeff Nippard for the workout and helpful videos along the way and [@pattlebass](https://github.com/pattlebass) for the idea of using LocalStorage.

## License

This project is licensed under the MIT License.
