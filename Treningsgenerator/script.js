let currentCategory = '';


const workouts = {
    styrke: {
        image: 'images/styrke.jpg',
        workouts: [
            {
                title: "Kraftig Styrkeøkt",
                exercises: [
                    {
                        name: "Knebøy",
                        sets: "4 x 8-10",
                        description: "Stå med føttene i skulderbredde. Senk deg ned ved å bøye i knærne og hoftene, hold ryggen rett. Press deg opp til startposisjon."
                    },
                    {
                        name: "Benkpress",
                        sets: "4 x 8-10",
                        description: "Ligg på benk med stangen over brystet. Senk stangen kontrollert ned til brystet, deretter press opp til armene er strake."
                    },
                    {
                        name: "Markløft",
                        sets: "3 x 6-8",
                        description: "Stå med føttene under stangen. Grip stangen, hold ryggen rett og løft ved å strekke ut hofter og knær samtidig."
                    },
                    {
                        name: "Skulderpress",
                        sets: "3 x 10-12",
                        description: "Sittende eller stående, press vektene fra skulderhøyde rett opp over hodet. Senk kontrollert tilbake."
                    },
                    {
                        name: "Pull-ups",
                        sets: "3 x 6-10",
                        description: "Heng i stang med grep litt bredere enn skulderbredde. Dra deg opp til haken er over stangen."
                    },
                    {
                        name: "Lunges",
                        sets: "3 x 10 per ben",
                        description: "Ta et stort steg fremover, senk bakre kne mot gulvet. Press deg tilbake til startposisjon."
                    }
                ]
            },
            {
                title: "Upper Body Blast",
                exercises: [
                    {
                        name: "Benkpress",
                        sets: "4 x 10-12",
                        description: "Ligg på benk med stangen over brystet. Senk stangen kontrollert ned til brystet, deretter press opp."
                    },
                    {
                        name: "Rows",
                        sets: "4 x 10",
                        description: "Bøy deg frem i hoften, hold ryggen rett. Dra vekten opp mot magen, stram skulderbladene sammen."
                    },
                    {
                        name: "Skulderpress",
                        sets: "3 x 12",
                        description: "Press vektene fra skulderhøyde rett opp over hodet. Kontrollert bevegelse."
                    },
                    {
                        name: "Biceps Curls",
                        sets: "3 x 12-15",
                        description: "Stå med manualer i hendene. Bøy albuene og løft vektene opp mot skuldrene."
                    },
                    {
                        name: "Triceps Dips",
                        sets: "3 x 10-12",
                        description: "Bruk benk eller stol. Senk kroppen ved å bøye albuene til 90 grader, deretter press deg opp."
                    },
                    {
                        name: "Face Pulls",
                        sets: "3 x 15",
                        description: "Dra tau eller bånd mot ansiktet, hold albuene høye. Styrker bakre skuldre."
                    }
                ]
            },
            {
                title: "Lower Body Power",
                exercises: [
                    {
                        name: "Knebøy",
                        sets: "5 x 5",
                        description: "Tung vekt, lavt antall reps. Hold god form, gå dypt."
                    },
                    {
                        name: "Markløft",
                        sets: "4 x 6",
                        description: "Fokuser på eksplosiv kraft fra gulv til låst posisjon."
                    },
                    {
                        name: "Bulgarian Split Squat",
                        sets: "3 x 10 per ben",
                        description: "Bakre fot på benk, senk deg ned i utfall. Intens benøvelse."
                    },
                    {
                        name: "Leg Press",
                        sets: "4 x 12",
                        description: "Press plattformen opp med føttene, kontrollert ned."
                    },
                    {
                        name: "Hamstring Curls",
                        sets: "3 x 12-15",
                        description: "Isoler bakside lår ved å bøye knærne mot deg."
                    },
                    {
                        name: "Calf Raises",
                        sets: "4 x 15-20",
                        description: "Stå på tærne, løft hæler så høyt som mulig. Bygg leggmuskler."
                    }
                ]
            }
        ]
    },
    cardio: {
        image: 'images/cardio.jpg',
        workouts: [
            {
                title: "Cardio",
                exercises: [
                    {
                        name: "Burpees",
                        sets: "45 sek on / 15 sek off",
                        description: "Fra stående, gå ned i planke, gjør push-up, hopp føttene frem og hopp opp."
                    },
                    {
                        name: "High Knees",
                        sets: "45 sek on / 15 sek off",
                        description: "Løp på stedet og løft knærne så høyt som mulig. Høy intensitet."
                    },
                    {
                        name: "Mountain Climbers",
                        sets: "45 sek on / 15 sek off",
                        description: "I plankeposisjon, dra knærne vekselvis inn mot brystet i hurtig tempo."
                    },
                    {
                        name: "Jump Squats",
                        sets: "45 sek on / 15 sek off",
                        description: "Gjør en squat, deretter eksploder opp i et hopp. Land mykt."
                    },
                    {
                        name: "Boxing Punches",
                        sets: "45 sek on / 15 sek off",
                        description: "Stå i boksestilling, kast raske slag. Maksimal intensitet."
                    },
                    {
                        name: "Sprint på Stedet",
                        sets: "45 sek on / 15 sek off",
                        description: "Sprint så fort du kan på stedet. Pump armene."
                    }
                ]
            },
            {
                title: "Cardio Burn",
                exercises: [
                    {
                        name: "Jumping Jacks",
                        sets: "60 sekunder",
                        description: "Hopp og spre ben og armer samtidig, deretter hopp tilbake."
                    },
                    {
                        name: "Skater Hops",
                        sets: "45 sekunder",
                        description: "Hopp side til side som en skøyteløper. Bygg kraft og balanse."
                    },
                    {
                        name: "Burpees",
                        sets: "30 sekunder",
                        description: "Full kropps eksplosiv øvelse. Push hard!"
                    },
                    {
                        name: "High Knees",
                        sets: "60 sekunder",
                        description: "Løft knær mot brystet i hurtig tempo."
                    },
                    {
                        name: "Plank Jacks",
                        sets: "45 sekunder",
                        description: "I planke, hopp føttene ut og inn. Hold core stabil."
                    },
                    {
                        name: "Bicycle Crunches",
                        sets: "60 sekunder",
                        description: "Ligg på ryggen, roter overkroppen og dra albue mot motsatt kne."
                    }
                ]
            },
            {
                title: "Endurance Builder",
                exercises: [
                    {
                        name: "Løping på Stedet",
                        sets: "3 minutter",
                        description: "Moderat tempo, fokuser på pust og utholdenheten."
                    },
                    {
                        name: "Jumping Jacks",
                        sets: "2 minutter",
                        description: "Hold jevn rytme, ikke for eksplosivt."
                    },
                    {
                        name: "Step-Ups",
                        sets: "2 minutter",
                        description: "Opp og ned fra benk eller trapp. Vekselvis ben."
                    },
                    {
                        name: "Shadow Boxing",
                        sets: "3 minutter",
                        description: "Bokse-bevegelser i luften. Bygg kardio og koordinasjon."
                    },
                    {
                        name: "Mountain Climbers",
                        sets: "90 sekunder",
                        description: "Moderat tempo, fokuser på form."
                    },
                    {
                        name: "Cool Down Jog",
                        sets: "2 minutter",
                        description: "Rolig jogg for å senke pulsen gradvis."
                    }
                ]
            }
        ]
    },
    yoga: {
        image: 'images/yoga.jpg',
        workouts: [
            {
                title: "Rolig Morgen Yoga",
                exercises: [
                    {
                        name: "Solhilsen (Sun Salutation)",
                        sets: "5 runder",
                        description: "En flytende sekvens som varmer opp hele kroppen. Følg pusten."
                    },
                    {
                        name: "Nedadgående Hund",
                        sets: "Hold 60 sek",
                        description: "Lag en V-form med kroppen, press hender i gulvet og strekk bakover."
                    },
                    {
                        name: "Krigerstilling 1",
                        sets: "Hold 45 sek per side",
                        description: "Stort utfall med armer over hodet. Bygg styrke og balanse."
                    },
                    {
                        name: "Trestilling (Tree Pose)",
                        sets: "Hold 45 sek per side",
                        description: "Stå på ett ben, plasser andre fot på innsiden av låret. Fokuser."
                    },
                    {
                        name: "Barnets Stilling (Child's Pose)",
                        sets: "Hold 90 sek",
                        description: "Hvil og strekk ryggen. Rolig pust."
                    },
                    {
                        name: "Savasana",
                        sets: "3-5 minutter",
                        description: "Ligg flatt på ryggen, total avslapning. Integrer økten."
                    }
                ]
            },
            {
                title: "Fleksibilitet & Balance",
                exercises: [
                    {
                        name: "Katt-Ku Strekk",
                        sets: "10 runder",
                        description: "På alle fire, veksle mellom å runde ryggen (katt) og senke buken (ku)."
                    },
                    {
                        name: "Pigeon Pose",
                        sets: "Hold 60 sek per side",
                        description: "Dypt hoftestrekk. Pust inn i ubehaget."
                    },
                    {
                        name: "Seated Forward Fold",
                        sets: "Hold 90 sek",
                        description: "Sitt med ben rett frem, bøy deg fremover. Strekk bakside."
                    },
                    {
                        name: "Butterfly Stretch",
                        sets: "Hold 60 sek",
                        description: "Sitt med fotsåler sammen, press knær ned. Hofteåpner."
                    },
                    {
                        name: "Cobra Pose",
                        sets: "Hold 30 sek x 3",
                        description: "Ligg på magen, press overkroppen opp. Strekk front."
                    },
                    {
                        name: "Spinal Twist",
                        sets: "Hold 45 sek per side",
                        description: "Ligg på ryggen, roter nedre kropp til siden. Mobiliser rygg."
                    }
                ]
            },
            {
                title: "Mindful Movement",
                exercises: [
                    {
                        name: "Solhilsen A",
                        sets: "3 runder - sakte",
                        description: "Hver bevegelse tar 5-10 sekunder. Helt tilstede."
                    },
                    {
                        name: "Warrior Flow",
                        sets: "Flyt mellom warrior 1, 2, 3",
                        description: "Flytende overgang mellom krigerstillinger. 2 min per side."
                    },
                    {
                        name: "Balance Series",
                        sets: "1 min per øvelse",
                        description: "Tree, Eagle, Dancer pose. Fokuser på et punkt."
                    },
                    {
                        name: "Seated Meditation Poses",
                        sets: "5 minutter",
                        description: "Easy pose, half lotus, eller hero pose. Fokus på pust."
                    },
                    {
                        name: "Yin Stretch Hold",
                        sets: "3-5 min per stilling",
                        description: "Velg 3 strekk, hold lenge. Passiv stretch for dype vev."
                    },
                    {
                        name: "Guided Savasana",
                        sets: "10 minutter",
                        description: "Body scan meditasjon i savasana. Total integrering."
                    }
                ]
            }
        ]
    },
    fullbody: {
        image: 'images/fullbody.jpg',
        workouts: [
            {
                title: "Total Body Workout",
                exercises: [
                    {
                        name: "Burpees",
                        sets: "3 x 12",
                        description: "Full burpee med push-up. Eksploder opp med hopp."
                    },
                    {
                        name: "Kettlebell Swings",
                        sets: "4 x 15",
                        description: "Sving kettlebell fra mellom bena til skulderhøyde. Bruk hofter."
                    },
                    {
                        name: "Thruster",
                        sets: "3 x 10",
                        description: "Kombiner squat med skulderpress. Eksplosiv bevegelse."
                    },
                    {
                        name: "Renegade Rows",
                        sets: "3 x 8 per side",
                        description: "I planke med manualer, ro en manual om gangen. Hold stabil."
                    },
                    {
                        name: "Mountain Climbers",
                        sets: "3 x 30 sek",
                        description: "Hurtig tempo, hold hoften nede. Cardio og core."
                    },
                    {
                        name: "Jump Squats",
                        sets: "3 x 15",
                        description: "Eksplosive squats med hopp. Bygg kraft."
                    }
                ]
            },
            {
                title: "Functional Fitness",
                exercises: [
                    {
                        name: "Turkish Get-Up",
                        sets: "3 x 5 per side",
                        description: "Kompleks bevegelse fra liggende til stående med vekt."
                    },
                    {
                        name: "Medicine Ball Slams",
                        sets: "4 x 15",
                        description: "Løft ball over hodet og slam ned. Full kroppseksplosjon."
                    },
                    {
                        name: "Walking Lunges",
                        sets: "3 x 20 steg",
                        description: "Utfall fremover kontinuerlig. Hold god form."
                    },
                    {
                        name: "Push-Up to T-Rotation",
                        sets: "3 x 10 per side",
                        description: "Push-up, deretter roter kroppen i T-form. Core og balanse."
                    },
                    {
                        name: "Box Jumps",
                        sets: "4 x 10",
                        description: "Hopp opp på boks, step ned. Bygg eksplosiv kraft."
                    },
                    {
                        name: "Farmer's Walk",
                        sets: "3 x 30 meter",
                        description: "Gå med tunge vekter i hver hånd. Grip og core styrke."
                    }
                ]
            },
            {
                title: "CrossFit Style WOD",
                exercises: [
                    {
                        name: "Wall Balls",
                        sets: "4 x 15",
                        description: "Squat med medisinball, kast opp mot vegg. Fang og gjenta."
                    },
                    {
                        name: "Pull-Ups",
                        sets: "4 x 8-10",
                        description: "Streng eller kipping. Hake over stang."
                    },
                    {
                        name: "Kettlebell Snatch",
                        sets: "3 x 10 per arm",
                        description: "Eksplosiv løft av kettlebell fra gulv til over hodet."
                    },
                    {
                        name: "Rowing (eller Mountain Climbers)",
                        sets: "500m eller 90 sek",
                        description: "Maksimal innsats cardio-segment."
                    },
                    {
                        name: "Handstand Push-Ups",
                        sets: "3 x 5-8",
                        description: "Eller pike push-ups som skalering. Skulder styrke."
                    },
                    {
                        name: "Double Unders",
                        sets: "3 x 30",
                        description: "Hopp tau hvor tau går under to ganger per hopp. Eller 60 single unders."
                    }
                ]
            }
        ]
    }
};

function generateWorkout(category) {
    currentCategory = category;
    
    
    const categoryData = workouts[category];
    const randomWorkout = categoryData.workouts[Math.floor(Math.random() * categoryData.workouts.length)];
    
    
    document.getElementById('workoutTitle').textContent = randomWorkout.title;
    document.getElementById('workoutImage').src = categoryData.image;
    document.getElementById('workoutImage').alt = category + ' trening';
    
    const exercisesList = document.getElementById('exercisesList');
    exercisesList.innerHTML = '';
    
    randomWorkout.exercises.forEach(exercise => {
        const exerciseDiv = document.createElement('div');
        exerciseDiv.className = 'exercise-item';
        exerciseDiv.innerHTML = `
            <div class="exercise-name">${exercise.name}</div>
            <div class="exercise-details">${exercise.sets}</div>
            <div class="exercise-description">${exercise.description}</div>
        `;
        exercisesList.appendChild(exerciseDiv);
    });
    
    
    document.getElementById('workoutDisplay').classList.add('active');
    
    
    document.getElementById('workoutDisplay').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function regenerateWorkout() {
    if (currentCategory) {
        generateWorkout(currentCategory);
    }
}
