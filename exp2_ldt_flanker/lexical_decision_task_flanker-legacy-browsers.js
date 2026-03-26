/********************************* 
 * Tarea De Decisión Léxica *
 *********************************/


// store info about the experiment session:
let expName = 'Tarea de decisión léxica';  // from the Builder filename that created this script
let expInfo = {
    'PROLIFIC_PID': '',
    'STUDY_ID': '',
    'SESSION_ID': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(consent_prescreeningRoutineBegin());
flowScheduler.add(consent_prescreeningRoutineEachFrame());
flowScheduler.add(consent_prescreeningRoutineEnd());
flowScheduler.add(check_prescreening_answersRoutineBegin());
flowScheduler.add(check_prescreening_answersRoutineEachFrame());
flowScheduler.add(check_prescreening_answersRoutineEnd());
const showTrialsLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(showTrialsLoopLoopBegin(showTrialsLoopLoopScheduler));
flowScheduler.add(showTrialsLoopLoopScheduler);
flowScheduler.add(showTrialsLoopLoopEnd);

















const showPrescreeningFailedMsgLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(showPrescreeningFailedMsgLoopBegin(showPrescreeningFailedMsgLoopScheduler));
flowScheduler.add(showPrescreeningFailedMsgLoopScheduler);
flowScheduler.add(showPrescreeningFailedMsgLoopEnd);


flowScheduler.add(quitPsychoJS, 'Gracias por su participación. Por favor, no cierre esta ventana. Será redirigido automáticamente a Prolific.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Gracias por su participación. Por favor, no cierre esta ventana. Será redirigido automáticamente a Prolific.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // libraries:
    {'surveyLibrary': true},
    // resources:
    {'name': 'genderflanker_practice.xlsx', 'path': 'genderflanker_practice.xlsx'},
    {'name': 'instructions_after_practice.xlsx', 'path': 'instructions_after_practice.xlsx'},
    {'surveyId': '4fcd2066-24ec-499c-bb19-d2ba24f5a758'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'instructionsFM.xlsx', 'path': 'instructionsFM.xlsx'},
    {'name': 'instructionsMF.xlsx', 'path': 'instructionsMF.xlsx'},
    {'name': 'keyboardresponseFM.png', 'path': 'keyboardresponseFM.png'},
    {'name': 'keyboardresponseMF.png', 'path': 'keyboardresponseMF.png'},
    {'name': 'touchresponseFM.png', 'path': 'touchresponseFM.png'},
    {'name': 'touchresponseMF.png', 'path': 'touchresponseMF.png'},
    {'name': 'instructions.xlsx', 'path': 'instructions.xlsx'},
    {'name': 'instructions_after_practice.xlsx', 'path': 'instructions_after_practice.xlsx'},
    {'name': 'trials_list0.xlsx', 'path': 'trials_list0.xlsx'},
    {'name': 'trials_list1.xlsx', 'path': 'trials_list1.xlsx'},
    {'name': 'trials_list2.xlsx', 'path': 'trials_list2.xlsx'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://app.prolific.com/submissions/complete?cc=CTEHAY7V', 'https://app.prolific.com/submissions/complete?cc=CZNM8ZIJ');


  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["PROLIFIC_PID"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var check_prescreening_answersClock;
var full_counterbalancing_condition;
var feminine_left;
var counterbalancing_condition;
var InstructionsClock;
var instructions;
var instr_done_keyboard;
var instr_done_button;
var instr_done_label;
var instr_done_touch;
var thisExp;
var win;
var event;
var randint;
var instructions_image;
var instructions_image_touch;
var presentTrialClock;
var dpi_scaling;
var font_scale;
var fixation_height;
var text_height;
var arrow_keys_height;
var trial_list_file;
var mask_duration;
var trial_timeout;
var combined_string;
var fixation_mask;
var target;
var prime_text;
var response;
var button_left;
var button_right;
var trial_label_right;
var touch_resp;
var trial_label_left;
var feedbackClock;
var target_feedback;
var msg;
var feedback_text;
var button_left_2;
var button_right_2;
var trial_label_left_2;
var trial_label_right_2;
var BreakClock;
var break_every;
var break_msg_top;
var break_msg_middle;
var break_msg_bottom;
var break_msg;
var trials_presented_so_far;
var break_text;
var break_done_touch;
var break_done_keyboard;
var break_done_button;
var break_done_button_label;
var EndClock;
var thank_you_bye;
var prescreeningFailedMsgClock;
var prescreeningFailedTxt;
var key_resp;
var prescreening_failed_button;
var prescreening_failed_button_label;
var prescreening_failed_button_touch;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "check_prescreening_answers"
  check_prescreening_answersClock = new util.Clock();
  
  function assignGroup(participantID) {
      // Create a simple hash by summing the character codes of the participant ID
      let hash = 0;
      for (let i = 0; i < participantID.length; i++) {
          hash += participantID.charCodeAt(i);
      }
  
      // Use modulo to assign to one of the six groups (0, 1, 2, 3, 4, 5)
      let group = hash % 6;
      
      return group;
  }
  
  full_counterbalancing_condition = 0 //assignGroup(expInfo.PROLIFIC_PID);
  // counterbalance which key/side encodes feminine and which encodes masculine
  feminine_left = full_counterbalancing_condition < 3;
  // which file to use
  counterbalancing_condition = full_counterbalancing_condition % 3;
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions',
    text: '',
    font: 'Courier New',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  instr_done_keyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_done_button = new visual.Rect ({
    win: psychoJS.window, name: 'instr_done_button', 
    width: [0.4, 0.1][0], height: [0.4, 0.1][1],
    ori: 0, 
    pos: [0, (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -2, 
    interpolate: true, 
  });
  
  instr_done_label = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_done_label',
    text: 'Continuar',
    font: 'Courier New',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  instr_done_touch = new core.Mouse({
    win: psychoJS.window,
  });
  instr_done_touch.mouseClock = new util.Clock();
  // Some shortcuts to make auto-conversion from Python easier
  // from https://docs.google.com/document/d/13jp0QAqQeFlYSjeZS0fDInvgaDzBXjGQNe4VNKbbNHQ/edit?pli=1#
  
  //console.log("Resolution: ", psychoJS.window.size[0], "x", psychoJS.window.size[1])
  
  thisExp=psychoJS.experiment;
  win=psychoJS.window;
  event=psychoJS.eventManager;
  
  //round = function(num, n=0) {    
  //    return +(Math.round(num + ("e+" + n))  + ("e-" + n));
  //}
  
  
  randint = function(min, maxplusone) {
    return Math.floor(Math.random() * (maxplusone - min) ) + min;
  }
  
  instructions_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructions_image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0, 
    pos : [0, (- 0.15)], 
    draggable: false,
    size : [0.6, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -6.0 
  });
  instructions_image_touch = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructions_image_touch', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, 
    pos : [0, (- 0.15)], 
    draggable: false,
    size : [0.6, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  // Initialize components for Routine "presentTrial"
  presentTrialClock = new util.Clock();
  // Run 'Begin Experiment' code from settings_and_cond
  dpi_scaling = 1;
  font_scale = 1.5;
  fixation_height = 0.1;
  text_height = 0.1;
  arrow_keys_height = 0.05;
  
  window.expInfo = expInfo
  
  // counterbalancing determined in check_prescreening_counterbalancing routine
  thisExp.addData("counterbalancing_condition", counterbalancing_condition);
  trial_list_file = (("trials_list" + counterbalancing_condition.toString()) + ".xlsx");
  mask_duration = 0.5;
  trial_timeout = 2;
  // the following only for super fast testing
  //mask_duration = 0.001
  // trial_timeout = 0.002
  combined_string = "";
  fixation_mask = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_mask',
    text: '',
    font: 'Courier New',
    units: undefined, 
    pos: [0, 1], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  target = new visual.TextStim({
    win: psychoJS.window,
    name: 'target',
    text: '|\n\n|',
    font: 'Courier New',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  prime_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'prime_text',
    text: '',
    font: 'Courier New',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  button_left = new visual.Rect ({
    win: psychoJS.window, name: 'button_left', 
    width: [0.4, 0.2][0], height: [0.4, 0.2][1],
    ori: 0, 
    pos: [(- 0.4), (- 0.3)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -5, 
    interpolate: true, 
  });
  
  button_right = new visual.Rect ({
    win: psychoJS.window, name: 'button_right', 
    width: [0.4, 0.2][0], height: [0.4, 0.2][1],
    ori: 0, 
    pos: [0.4, (- 0.3)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -6, 
    interpolate: true, 
  });
  
  trial_label_right = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_label_right',
    text: '',
    font: 'Courier New',
    units: undefined, 
    pos: [0.4, (- 0.3)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -7.0 
  });
  
  touch_resp = new core.Mouse({
    win: psychoJS.window,
  });
  touch_resp.mouseClock = new util.Clock();
  trial_label_left = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_label_left',
    text: '',
    font: 'Courier New',
    units: undefined, 
    pos: [(- 0.4), (- 0.3)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -10.0 
  });
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  target_feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'target_feedback',
    text: '',
    font: 'Courier New',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  // Run 'Begin Experiment' code from set_feedback
  msg = "No feedback message set yet";
  
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: '',
    font: 'Courier New',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  button_left_2 = new visual.Rect ({
    win: psychoJS.window, name: 'button_left_2', 
    width: [0.4, 0.2][0], height: [0.4, 0.2][1],
    ori: 0, 
    pos: [(- 0.4), (- 0.3)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -3, 
    interpolate: true, 
  });
  
  button_right_2 = new visual.Rect ({
    win: psychoJS.window, name: 'button_right_2', 
    width: [0.4, 0.2][0], height: [0.4, 0.2][1],
    ori: 0, 
    pos: [0.4, (- 0.3)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -4, 
    interpolate: true, 
  });
  
  trial_label_left_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_label_left_2',
    text: '',
    font: 'Courier New',
    units: undefined, 
    pos: [(- 0.4), (- 0.3)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  trial_label_right_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_label_right_2',
    text: '',
    font: 'Courier New',
    units: undefined, 
    pos: [0.4, (- 0.3)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "Break"
  BreakClock = new util.Clock();
  // Run 'Begin Experiment' code from break_code
  // do 151 so we don't break on the very last trial
  // this way, we'll break at 151, 302 and then the experiment finishes
  break_every = 151;
  break_msg_top = "";
  break_msg_middle = "Puede hacer un breve descanso.\n";
  break_msg_bottom = "Pulse cualquier tecla o toque el boton \ \"Continuar\" para seguir con el experimento.";
  break_msg = "";
  
  trials_presented_so_far = 0
  break_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'break_text',
    text: '',
    font: 'Courier New',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  break_done_touch = new core.Mouse({
    win: psychoJS.window,
  });
  break_done_touch.mouseClock = new util.Clock();
  break_done_keyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  break_done_button = new visual.Rect ({
    win: psychoJS.window, name: 'break_done_button', 
    width: [0.4, 0.1][0], height: [0.4, 0.1][1],
    ori: 0, 
    pos: [0, (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -4, 
    interpolate: true, 
  });
  
  break_done_button_label = new visual.TextStim({
    win: psychoJS.window,
    name: 'break_done_button_label',
    text: 'Continuar',
    font: 'Courier New',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  thank_you_bye = new visual.TextStim({
    win: psychoJS.window,
    name: 'thank_you_bye',
    text: 'Este es el final del experimento. Le agradecemos su participación. Para recibir su compensación, por favor, NO cierre esta ventana hasta que haya sido redirigido a la página de Prolific. \n\n¡Muchas gracias por su participación!\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "prescreeningFailedMsg"
  prescreeningFailedMsgClock = new util.Clock();
  prescreeningFailedTxt = new visual.TextStim({
    win: psychoJS.window,
    name: 'prescreeningFailedTxt',
    text: 'Desafortunadamente, sus respuestas a las preguntas de selección no coinciden con las que dio en Prolific. Por favor, verifique nuevamente sus respuestas en Prolific para asegurarse de que es elegible para este estudio. Si cree que está viendo este mensaje por error, por favor contáctenos en Prolific.\n\nPresione cualquier tecla o toque el boton "Terminar" para salir del experimento.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  prescreening_failed_button = new visual.Rect ({
    win: psychoJS.window, name: 'prescreening_failed_button', 
    width: [0.4, 0.1][0], height: [0.4, 0.1][1],
    ori: 0, 
    pos: [0, (- 0.4)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -3, 
    interpolate: true, 
  });
  
  prescreening_failed_button_label = new visual.TextStim({
    win: psychoJS.window,
    name: 'prescreening_failed_button_label',
    text: 'Terminar',
    font: 'Courier New',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  prescreening_failed_button_touch = new core.Mouse({
    win: psychoJS.window,
  });
  prescreening_failed_button_touch.mouseClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var consent_prescreening;
var consent_prescreeningClock;
function consent_prescreeningRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent_prescreening' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    //--- Starting Routine 'consent_prescreening' ---
    consent_prescreening = new visual.Survey({
        win: psychoJS.window,
        name: 'consent_prescreening',
        surveyId: '4fcd2066-24ec-499c-bb19-d2ba24f5a758',
    });
    consent_prescreeningClock = new util.Clock();
    consent_prescreening.setAutoDraw(true);
    consent_prescreening.status = PsychoJS.Status.STARTED;
    consent_prescreening.isFinished = false;
    consent_prescreening.tStart = t;  // (not accounting for frame time here)
    consent_prescreening.frameNStart = frameN;  // exact frame index
    return Scheduler.Event.NEXT;
  }
}


function consent_prescreeningRoutineEachFrame() {
  return async function () {
    t = consent_prescreeningClock.getTime();
    frameN = frameN + 1;  // number of completed frames (so 0 is the first frame)
    // if consent_prescreening is completed, move on
    if (consent_prescreening.isFinished) {
      consent_prescreening.setAutoDraw(false);
      consent_prescreening.status = PsychoJS.Status.FINISHED;
      // survey routines are not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      return Scheduler.Event.NEXT;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    return Scheduler.Event.FLIP_REPEAT;
  }
}


function consent_prescreeningRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent_prescreening' ---
    // get data from consent_prescreening
    const consent_prescreeningResponse =  consent_prescreening.getResponse();
    function addRecursively(resp, name) {
        if (resp.constructor === Object) {
            // if resp is an object, add each part as a column
            for (let subquestion in resp) {
                addRecursively(resp[subquestion], `${name}.${subquestion}`);
            }
        } else {
            psychoJS.experiment.addData(name, resp);
        }
    }
    // recursively add survey responses
    addRecursively(consent_prescreeningResponse, 'consent_prescreening');
    await consent_prescreening.save();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var check_prescreening_answersMaxDurationReached;
var instructions_file;
var check_prescreening_answersMaxDuration;
var check_prescreening_answersComponents;
function check_prescreening_answersRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'check_prescreening_answers' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    check_prescreening_answersClock.reset();
    routineTimer.reset();
    check_prescreening_answersMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from counterbalancing
    // select correct instructions depending on counterbalancing condition
    if (feminine_left) {
        instructions_file = "instructionsFM.xlsx";
    } else {
        instructions_file = "instructionsMF.xlsx";
    }
    
    psychoJS.experiment.addData('check_prescreening_answers.started', globalClock.getTime());
    check_prescreening_answersMaxDuration = null
    // keep track of which components have finished
    check_prescreening_answersComponents = [];
    
    check_prescreening_answersComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function check_prescreening_answersRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'check_prescreening_answers' ---
    // get current time
    t = check_prescreening_answersClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    check_prescreening_answersComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var trialReps;
var PrescreeningFailedMsgReps;
function check_prescreening_answersRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'check_prescreening_answers' ---
    check_prescreening_answersComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('check_prescreening_answers.stopped', globalClock.getTime());
    // Run 'End Routine' code from check_answers
    window.consent_prescreening = consent_prescreening; // Assuming this assignment is necessary
    
    //if (consent_prescreening._overallSurveyResults.language_disorder.includes('none') && 
    //    consent_prescreening._overallSurveyResults.first_language.includes('spanish')) { 
    if (consent_prescreening._overallSurveyResults['block_1/language_disorder'].includes("none") &&
    consent_prescreening._overallSurveyResults['block_1/first_language'].includes("spanish")) { 
        trialReps = 1;
        PrescreeningFailedMsgReps = 0;
    } else {
        trialReps = 0;
        PrescreeningFailedMsgReps = 1;
    }
    // the Routine "check_prescreening_answers" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var showTrialsLoop;
function showTrialsLoopLoopBegin(showTrialsLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    showTrialsLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: trialReps, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'showTrialsLoop'
    });
    psychoJS.experiment.addLoop(showTrialsLoop); // add the loop to the experiment
    currentLoop = showTrialsLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    showTrialsLoop.forEach(function() {
      snapshot = showTrialsLoop.getSnapshot();
    
      showTrialsLoopLoopScheduler.add(importConditions(snapshot));
      const instruction_pagesLoopScheduler = new Scheduler(psychoJS);
      showTrialsLoopLoopScheduler.add(instruction_pagesLoopBegin(instruction_pagesLoopScheduler, snapshot));
      showTrialsLoopLoopScheduler.add(instruction_pagesLoopScheduler);
      showTrialsLoopLoopScheduler.add(instruction_pagesLoopEnd);
      const practice_trialsLoopScheduler = new Scheduler(psychoJS);
      showTrialsLoopLoopScheduler.add(practice_trialsLoopBegin(practice_trialsLoopScheduler, snapshot));
      showTrialsLoopLoopScheduler.add(practice_trialsLoopScheduler);
      showTrialsLoopLoopScheduler.add(practice_trialsLoopEnd);
      const end_of_practice_trials_pagesLoopScheduler = new Scheduler(psychoJS);
      showTrialsLoopLoopScheduler.add(end_of_practice_trials_pagesLoopBegin(end_of_practice_trials_pagesLoopScheduler, snapshot));
      showTrialsLoopLoopScheduler.add(end_of_practice_trials_pagesLoopScheduler);
      showTrialsLoopLoopScheduler.add(end_of_practice_trials_pagesLoopEnd);
      const experiment_trialsLoopScheduler = new Scheduler(psychoJS);
      showTrialsLoopLoopScheduler.add(experiment_trialsLoopBegin(experiment_trialsLoopScheduler, snapshot));
      showTrialsLoopLoopScheduler.add(experiment_trialsLoopScheduler);
      showTrialsLoopLoopScheduler.add(experiment_trialsLoopEnd);
      showTrialsLoopLoopScheduler.add(EndRoutineBegin(snapshot));
      showTrialsLoopLoopScheduler.add(EndRoutineEachFrame());
      showTrialsLoopLoopScheduler.add(EndRoutineEnd(snapshot));
      showTrialsLoopLoopScheduler.add(showTrialsLoopLoopEndIteration(showTrialsLoopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var instruction_pages;
function instruction_pagesLoopBegin(instruction_pagesLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instruction_pages = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: instructions_file,
      seed: undefined, name: 'instruction_pages'
    });
    psychoJS.experiment.addLoop(instruction_pages); // add the loop to the experiment
    currentLoop = instruction_pages;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    instruction_pages.forEach(function() {
      snapshot = instruction_pages.getSnapshot();
    
      instruction_pagesLoopScheduler.add(importConditions(snapshot));
      instruction_pagesLoopScheduler.add(InstructionsRoutineBegin(snapshot));
      instruction_pagesLoopScheduler.add(InstructionsRoutineEachFrame());
      instruction_pagesLoopScheduler.add(InstructionsRoutineEnd(snapshot));
      instruction_pagesLoopScheduler.add(instruction_pagesLoopEndIteration(instruction_pagesLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function instruction_pagesLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(instruction_pages);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function instruction_pagesLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var practice_trials;
function practice_trialsLoopBegin(practice_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'genderflanker_practice.xlsx',
      seed: undefined, name: 'practice_trials'
    });
    psychoJS.experiment.addLoop(practice_trials); // add the loop to the experiment
    currentLoop = practice_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    practice_trials.forEach(function() {
      snapshot = practice_trials.getSnapshot();
    
      practice_trialsLoopScheduler.add(importConditions(snapshot));
      practice_trialsLoopScheduler.add(presentTrialRoutineBegin(snapshot));
      practice_trialsLoopScheduler.add(presentTrialRoutineEachFrame());
      practice_trialsLoopScheduler.add(presentTrialRoutineEnd(snapshot));
      practice_trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      practice_trialsLoopScheduler.add(feedbackRoutineEachFrame());
      practice_trialsLoopScheduler.add(feedbackRoutineEnd(snapshot));
      practice_trialsLoopScheduler.add(practice_trialsLoopEndIteration(practice_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practice_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practice_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var end_of_practice_trials_pages;
function end_of_practice_trials_pagesLoopBegin(end_of_practice_trials_pagesLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    end_of_practice_trials_pages = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'instructions_after_practice.xlsx',
      seed: undefined, name: 'end_of_practice_trials_pages'
    });
    psychoJS.experiment.addLoop(end_of_practice_trials_pages); // add the loop to the experiment
    currentLoop = end_of_practice_trials_pages;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    end_of_practice_trials_pages.forEach(function() {
      snapshot = end_of_practice_trials_pages.getSnapshot();
    
      end_of_practice_trials_pagesLoopScheduler.add(importConditions(snapshot));
      end_of_practice_trials_pagesLoopScheduler.add(InstructionsRoutineBegin(snapshot));
      end_of_practice_trials_pagesLoopScheduler.add(InstructionsRoutineEachFrame());
      end_of_practice_trials_pagesLoopScheduler.add(InstructionsRoutineEnd(snapshot));
      end_of_practice_trials_pagesLoopScheduler.add(end_of_practice_trials_pagesLoopEndIteration(end_of_practice_trials_pagesLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function end_of_practice_trials_pagesLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(end_of_practice_trials_pages);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function end_of_practice_trials_pagesLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var experiment_trials;
function experiment_trialsLoopBegin(experiment_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    experiment_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: trial_list_file,
      seed: undefined, name: 'experiment_trials'
    });
    psychoJS.experiment.addLoop(experiment_trials); // add the loop to the experiment
    currentLoop = experiment_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    experiment_trials.forEach(function() {
      snapshot = experiment_trials.getSnapshot();
    
      experiment_trialsLoopScheduler.add(importConditions(snapshot));
      experiment_trialsLoopScheduler.add(presentTrialRoutineBegin(snapshot));
      experiment_trialsLoopScheduler.add(presentTrialRoutineEachFrame());
      experiment_trialsLoopScheduler.add(presentTrialRoutineEnd(snapshot));
      experiment_trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      experiment_trialsLoopScheduler.add(feedbackRoutineEachFrame());
      experiment_trialsLoopScheduler.add(feedbackRoutineEnd(snapshot));
      experiment_trialsLoopScheduler.add(BreakRoutineBegin(snapshot));
      experiment_trialsLoopScheduler.add(BreakRoutineEachFrame());
      experiment_trialsLoopScheduler.add(BreakRoutineEnd(snapshot));
      experiment_trialsLoopScheduler.add(experiment_trialsLoopEndIteration(experiment_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function experiment_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(experiment_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function experiment_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function showTrialsLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(showTrialsLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function showTrialsLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var showPrescreeningFailedMsg;
function showPrescreeningFailedMsgLoopBegin(showPrescreeningFailedMsgLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    showPrescreeningFailedMsg = new TrialHandler({
      psychoJS: psychoJS,
      nReps: PrescreeningFailedMsgReps, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'showPrescreeningFailedMsg'
    });
    psychoJS.experiment.addLoop(showPrescreeningFailedMsg); // add the loop to the experiment
    currentLoop = showPrescreeningFailedMsg;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    showPrescreeningFailedMsg.forEach(function() {
      snapshot = showPrescreeningFailedMsg.getSnapshot();
    
      showPrescreeningFailedMsgLoopScheduler.add(importConditions(snapshot));
      showPrescreeningFailedMsgLoopScheduler.add(prescreeningFailedMsgRoutineBegin(snapshot));
      showPrescreeningFailedMsgLoopScheduler.add(prescreeningFailedMsgRoutineEachFrame());
      showPrescreeningFailedMsgLoopScheduler.add(prescreeningFailedMsgRoutineEnd(snapshot));
      showPrescreeningFailedMsgLoopScheduler.add(showPrescreeningFailedMsgLoopEndIteration(showPrescreeningFailedMsgLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function showPrescreeningFailedMsgLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(showPrescreeningFailedMsg);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function showPrescreeningFailedMsgLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var InstructionsMaxDurationReached;
var _instr_done_keyboard_allKeys;
var gotValidClick;
var InstructionsMaxDuration;
var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    InstructionsClock.reset();
    routineTimer.reset();
    InstructionsMaxDurationReached = false;
    // update component parameters for each repeat
    instructions.setText(instruct_text);
    instr_done_keyboard.keys = undefined;
    instr_done_keyboard.rt = undefined;
    _instr_done_keyboard_allKeys = [];
    // setup some python lists for storing info about the instr_done_touch
    instr_done_touch.clicked_name = [];
    gotValidClick = false; // until a click is received
    instructions_image.setImage(instruct_image);
    instructions_image_touch.setOri(0.0);
    instructions_image_touch.setImage(instruct_image);
    psychoJS.experiment.addData('Instructions.started', globalClock.getTime());
    InstructionsMaxDuration = null
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(instructions);
    InstructionsComponents.push(instr_done_keyboard);
    InstructionsComponents.push(instr_done_button);
    InstructionsComponents.push(instr_done_label);
    InstructionsComponents.push(instr_done_touch);
    InstructionsComponents.push(instructions_image);
    InstructionsComponents.push(instructions_image_touch);
    
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function InstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions' ---
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions* updates
    if (t >= 0.0 && instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions.tStart = t;  // (not accounting for frame time here)
      instructions.frameNStart = frameN;  // exact frame index
      
      instructions.setAutoDraw(true);
    }
    
    
    // *instr_done_keyboard* updates
    if (t >= 0.0 && instr_done_keyboard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_done_keyboard.tStart = t;  // (not accounting for frame time here)
      instr_done_keyboard.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_done_keyboard.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_done_keyboard.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_done_keyboard.clearEvents(); });
    }
    
    if (instr_done_keyboard.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_done_keyboard.getKeys({keyList: ['space'], waitRelease: false});
      _instr_done_keyboard_allKeys = _instr_done_keyboard_allKeys.concat(theseKeys);
      if (_instr_done_keyboard_allKeys.length > 0) {
        instr_done_keyboard.keys = _instr_done_keyboard_allKeys[_instr_done_keyboard_allKeys.length - 1].name;  // just the last key pressed
        instr_done_keyboard.rt = _instr_done_keyboard_allKeys[_instr_done_keyboard_allKeys.length - 1].rt;
        instr_done_keyboard.duration = _instr_done_keyboard_allKeys[_instr_done_keyboard_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *instr_done_button* updates
    if (t >= 0.0 && instr_done_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_done_button.tStart = t;  // (not accounting for frame time here)
      instr_done_button.frameNStart = frameN;  // exact frame index
      
      instr_done_button.setAutoDraw(true);
    }
    
    
    // *instr_done_label* updates
    if (t >= 0.0 && instr_done_label.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_done_label.tStart = t;  // (not accounting for frame time here)
      instr_done_label.frameNStart = frameN;  // exact frame index
      
      instr_done_label.setAutoDraw(true);
    }
    
    // *instr_done_touch* updates
    if (t >= 0.0 && instr_done_touch.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_done_touch.tStart = t;  // (not accounting for frame time here)
      instr_done_touch.frameNStart = frameN;  // exact frame index
      
      instr_done_touch.status = PsychoJS.Status.STARTED;
      instr_done_touch.mouseClock.reset();
      prevButtonState = instr_done_touch.getPressed();  // if button is down already this ISN'T a new click
      }
    if (instr_done_touch.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = instr_done_touch.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          instr_done_touch.clickableObjects = eval(instr_done_button)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(instr_done_touch.clickableObjects)) {
              instr_done_touch.clickableObjects = [instr_done_touch.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of instr_done_touch.clickableObjects) {
              if (obj.contains(instr_done_touch)) {
                  gotValidClick = true;
                  instr_done_touch.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              instr_done_touch.clicked_name.push(null);
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *instructions_image* updates
    if (((has_image == 1)) && instructions_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_image.tStart = t;  // (not accounting for frame time here)
      instructions_image.frameNStart = frameN;  // exact frame index
      
      instructions_image.setAutoDraw(true);
    }
    
    
    // *instructions_image_touch* updates
    if (((has_image == 2)) && instructions_image_touch.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_image_touch.tStart = t;  // (not accounting for frame time here)
      instructions_image_touch.frameNStart = frameN;  // exact frame index
      
      instructions_image_touch.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _mouseXYs;
function InstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions' ---
    InstructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instr_done_keyboard.corr, level);
    }
    psychoJS.experiment.addData('instr_done_keyboard.keys', instr_done_keyboard.keys);
    if (typeof instr_done_keyboard.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr_done_keyboard.rt', instr_done_keyboard.rt);
        psychoJS.experiment.addData('instr_done_keyboard.duration', instr_done_keyboard.duration);
        routineTimer.reset();
        }
    
    instr_done_keyboard.stop();
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = instr_done_touch.getPos();
    _mouseButtons = instr_done_touch.getPressed();
    psychoJS.experiment.addData('instr_done_touch.x', _mouseXYs[0]);
    psychoJS.experiment.addData('instr_done_touch.y', _mouseXYs[1]);
    psychoJS.experiment.addData('instr_done_touch.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('instr_done_touch.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('instr_done_touch.rightButton', _mouseButtons[2]);
    if (instr_done_touch.clicked_name.length > 0) {
      psychoJS.experiment.addData('instr_done_touch.clicked_name', instr_done_touch.clicked_name[0]);}
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var presentTrialMaxDurationReached;
var trial_label_left_text;
var trial_label_right_text;
var corrAns;
var prime_duration_s;
var target_onset;
var button_duration;
var _response_allKeys;
var presentTrialMaxDuration;
var presentTrialComponents;
function presentTrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'presentTrial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    presentTrialClock.reset();
    routineTimer.reset();
    presentTrialMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from settings_and_cond
    if (feminine_left) {
        trial_label_left_text = "A = Femenino";
        trial_label_right_text = "L = Masculino";
        if (StimulusType === "MAS"){
            corrAns = "l";
        } else {
            corrAns = "a";
        }
    } else {
        trial_label_left_text = "A = Masculino";
        trial_label_right_text = "L = Femenino";
        if (StimulusType === "MAS"){
            corrAns = "a";
        } else {
            corrAns = "l";
        }
    }    
            
    prime_duration_s = (PrimeDuration / 1000);
    target_onset = (mask_duration + prime_duration_s);
    button_duration = (target_onset + trial_timeout);
    // Combina flanker y target
    if (Condition === "AGR" || Condition === "DIS") {
        combined_string = `${Flanker} ${Prime} ${Flanker}`;
    } else {
        combined_string = `${Flanker}${Prime}${Flanker}`;
    }
    fixation_mask.setText('|\n\n|');
    prime_text.setText(combined_string);
    response.keys = undefined;
    response.rt = undefined;
    _response_allKeys = [];
    trial_label_right.setText(trial_label_right_text);
    // setup some python lists for storing info about the touch_resp
    // current position of the mouse:
    touch_resp.x = [];
    touch_resp.y = [];
    touch_resp.leftButton = [];
    touch_resp.midButton = [];
    touch_resp.rightButton = [];
    touch_resp.time = [];
    touch_resp.clicked_name = [];
    gotValidClick = false; // until a click is received
    trial_label_left.setText(trial_label_left_text);
    psychoJS.experiment.addData('presentTrial.started', globalClock.getTime());
    presentTrialMaxDuration = null
    // keep track of which components have finished
    presentTrialComponents = [];
    presentTrialComponents.push(fixation_mask);
    presentTrialComponents.push(target);
    presentTrialComponents.push(prime_text);
    presentTrialComponents.push(response);
    presentTrialComponents.push(button_left);
    presentTrialComponents.push(button_right);
    presentTrialComponents.push(trial_label_right);
    presentTrialComponents.push(touch_resp);
    presentTrialComponents.push(trial_label_left);
    
    presentTrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function presentTrialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'presentTrial' ---
    // get current time
    t = presentTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_mask* updates
    if (t >= 0 && fixation_mask.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_mask.tStart = t;  // (not accounting for frame time here)
      fixation_mask.frameNStart = frameN;  // exact frame index
      
      fixation_mask.setAutoDraw(true);
    }
    
    frameRemains = 0 + mask_duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixation_mask.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_mask.setAutoDraw(false);
    }
    
    
    // *target* updates
    if (t >= 0 && target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target.tStart = t;  // (not accounting for frame time here)
      target.frameNStart = frameN;  // exact frame index
      
      target.setAutoDraw(true);
    }
    
    frameRemains = 0 + trial_timeout - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (target.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      target.setAutoDraw(false);
    }
    
    
    // *prime_text* updates
    if (t >= mask_duration && prime_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prime_text.tStart = t;  // (not accounting for frame time here)
      prime_text.frameNStart = frameN;  // exact frame index
      
      prime_text.setAutoDraw(true);
    }
    
    frameRemains = mask_duration + prime_duration_s - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (prime_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      prime_text.setAutoDraw(false);
    }
    
    
    // *response* updates
    if (t >= target_onset && response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response.tStart = t;  // (not accounting for frame time here)
      response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { response.clearEvents(); });
    }
    
    frameRemains = target_onset + trial_timeout - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (response.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      response.status = PsychoJS.Status.FINISHED;
        }
      
    if (response.status === PsychoJS.Status.STARTED) {
      let theseKeys = response.getKeys({keyList: ['a', 'l'], waitRelease: false});
      _response_allKeys = _response_allKeys.concat(theseKeys);
      if (_response_allKeys.length > 0) {
        response.keys = _response_allKeys[_response_allKeys.length - 1].name;  // just the last key pressed
        response.rt = _response_allKeys[_response_allKeys.length - 1].rt;
        response.duration = _response_allKeys[_response_allKeys.length - 1].duration;
        // was this correct?
        if (response.keys == corrAns) {
            response.corr = 1;
        } else {
            response.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *button_left* updates
    if (t >= 0 && button_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_left.tStart = t;  // (not accounting for frame time here)
      button_left.frameNStart = frameN;  // exact frame index
      
      button_left.setAutoDraw(true);
    }
    
    frameRemains = 0 + button_duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (button_left.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      button_left.setAutoDraw(false);
    }
    
    
    // *button_right* updates
    if (t >= 0 && button_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_right.tStart = t;  // (not accounting for frame time here)
      button_right.frameNStart = frameN;  // exact frame index
      
      button_right.setAutoDraw(true);
    }
    
    frameRemains = 0 + button_duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (button_right.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      button_right.setAutoDraw(false);
    }
    
    
    // *trial_label_right* updates
    if (t >= 0 && trial_label_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_label_right.tStart = t;  // (not accounting for frame time here)
      trial_label_right.frameNStart = frameN;  // exact frame index
      
      trial_label_right.setAutoDraw(true);
    }
    
    frameRemains = 0 + button_duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (trial_label_right.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial_label_right.setAutoDraw(false);
    }
    
    // *touch_resp* updates
    if (t >= target_onset && touch_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      touch_resp.tStart = t;  // (not accounting for frame time here)
      touch_resp.frameNStart = frameN;  // exact frame index
      
      touch_resp.status = PsychoJS.Status.STARTED;
      touch_resp.mouseClock.reset();
      prevButtonState = touch_resp.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = target_onset + trial_timeout - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (touch_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      touch_resp.status = PsychoJS.Status.FINISHED;
        }
    if (touch_resp.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = touch_resp.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          touch_resp.clickableObjects = eval([button_left, button_right])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(touch_resp.clickableObjects)) {
              touch_resp.clickableObjects = [touch_resp.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of touch_resp.clickableObjects) {
              if (obj.contains(touch_resp)) {
                  gotValidClick = true;
                  touch_resp.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              touch_resp.clicked_name.push(null);
          }
          _mouseXYs = touch_resp.getPos();
          touch_resp.x.push(_mouseXYs[0]);
          touch_resp.y.push(_mouseXYs[1]);
          touch_resp.leftButton.push(_mouseButtons[0]);
          touch_resp.midButton.push(_mouseButtons[1]);
          touch_resp.rightButton.push(_mouseButtons[2]);
          touch_resp.time.push(touch_resp.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    if ((frameN > 10)) {
            if ((! psychoJS.window._windowAlreadyInFullScreen)) {
                alert("You exited full screen mode. The experiment will now terminate.");
                quitPsychoJS("Experiment aborted since full screen mode was exited.");
                }
            }
    
    // *trial_label_left* updates
    if (t >= 0.0 && trial_label_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_label_left.tStart = t;  // (not accounting for frame time here)
      trial_label_left.frameNStart = frameN;  // exact frame index
      
      trial_label_left.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + button_duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (trial_label_left.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial_label_left.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    presentTrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _pj;
var corr;
var rt;
function presentTrialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'presentTrial' ---
    presentTrialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('presentTrial.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (response.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         response.corr = 1;  // correct non-response
      } else {
         response.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(response.corr, level);
    }
    psychoJS.experiment.addData('response.keys', response.keys);
    psychoJS.experiment.addData('response.corr', response.corr);
    if (typeof response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('response.rt', response.rt);
        psychoJS.experiment.addData('response.duration', response.duration);
        routineTimer.reset();
        }
    
    response.stop();
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('touch_resp.x', touch_resp.x);
    psychoJS.experiment.addData('touch_resp.y', touch_resp.y);
    psychoJS.experiment.addData('touch_resp.leftButton', touch_resp.leftButton);
    psychoJS.experiment.addData('touch_resp.midButton', touch_resp.midButton);
    psychoJS.experiment.addData('touch_resp.rightButton', touch_resp.rightButton);
    psychoJS.experiment.addData('touch_resp.time', touch_resp.time);
    psychoJS.experiment.addData('touch_resp.clicked_name', touch_resp.clicked_name);
    
    // Run 'End Routine' code from check_correct
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if (response.keys) {
        corr = response.corr;
        rt = response.rt;
    } else {
        if ((touch_resp.clicked_name[0] !== undefined)) {
            rt = touch_resp.time[0];
            if (((_pj.in_es6("left", touch_resp.clicked_name[0]) && (corrAns === "a")) || (_pj.in_es6("right", touch_resp.clicked_name[0]) && (corrAns === "l")))) {
                corr = 1;
            } else {
                corr = 0;
            }
        } else {
            corr = (- 1);
        }
    }
    psychoJS.experiment.addData("rt", rt);
    psychoJS.experiment.addData("corr", corr);
    
    // the Routine "presentTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedbackMaxDurationReached;
var feedback_color;
var feedback_duration;
var feedbackMaxDuration;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    feedbackClock.reset();
    routineTimer.reset();
    feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    target_feedback.setText('|\n\n|');
    // Run 'Begin Routine' code from set_feedback
    if ((corr === (- 1))) {
        msg = "\u00a1Muy lento!";
        feedback_color = "black";
        feedback_duration = 0.5;
    } else {
        if ((TrialID < 3000)) {
            feedback_duration = 0.5;
            if (corr) {
                msg = "\u2713";
                feedback_color = "green";
            } else {
                msg = "\u2715";
                feedback_color = "red";
            }
        } else {
            feedback_duration = 0;
        }
    }
    
    feedback_text.setColor(new util.Color(feedback_color));
    feedback_text.setText(msg);
    trial_label_left_2.setText(trial_label_left_text);
    trial_label_right_2.setText(trial_label_right_text);
    psychoJS.experiment.addData('feedback.started', globalClock.getTime());
    feedbackMaxDuration = null
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(target_feedback);
    feedbackComponents.push(feedback_text);
    feedbackComponents.push(button_left_2);
    feedbackComponents.push(button_right_2);
    feedbackComponents.push(trial_label_left_2);
    feedbackComponents.push(trial_label_right_2);
    
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *target_feedback* updates
    if (t >= 0 && target_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_feedback.tStart = t;  // (not accounting for frame time here)
      target_feedback.frameNStart = frameN;  // exact frame index
      
      target_feedback.setAutoDraw(true);
    }
    
    frameRemains = 0 + feedback_duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (target_feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      target_feedback.setAutoDraw(false);
    }
    
    
    // *feedback_text* updates
    if (t >= 0.0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + feedback_duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (feedback_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_text.setAutoDraw(false);
    }
    
    
    // *button_left_2* updates
    if (t >= 0 && button_left_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_left_2.tStart = t;  // (not accounting for frame time here)
      button_left_2.frameNStart = frameN;  // exact frame index
      
      button_left_2.setAutoDraw(true);
    }
    
    frameRemains = 0 + feedback_duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (button_left_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      button_left_2.setAutoDraw(false);
    }
    
    
    // *button_right_2* updates
    if (t >= 0 && button_right_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_right_2.tStart = t;  // (not accounting for frame time here)
      button_right_2.frameNStart = frameN;  // exact frame index
      
      button_right_2.setAutoDraw(true);
    }
    
    frameRemains = 0 + feedback_duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (button_right_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      button_right_2.setAutoDraw(false);
    }
    
    
    // *trial_label_left_2* updates
    if (t >= 0 && trial_label_left_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_label_left_2.tStart = t;  // (not accounting for frame time here)
      trial_label_left_2.frameNStart = frameN;  // exact frame index
      
      trial_label_left_2.setAutoDraw(true);
    }
    
    frameRemains = 0 + feedback_duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (trial_label_left_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial_label_left_2.setAutoDraw(false);
    }
    
    
    // *trial_label_right_2* updates
    if (t >= 0 && trial_label_right_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_label_right_2.tStart = t;  // (not accounting for frame time here)
      trial_label_right_2.frameNStart = frameN;  // exact frame index
      
      trial_label_right_2.setAutoDraw(true);
    }
    
    frameRemains = 0 + feedback_duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (trial_label_right_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial_label_right_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
    // the Routine "feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BreakMaxDurationReached;
var show_break;
var _break_done_keyboard_allKeys;
var BreakMaxDuration;
var BreakComponents;
function BreakRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Break' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    BreakClock.reset();
    routineTimer.reset();
    BreakMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from break_code
    trials_presented_so_far++
    
    break_msg_top = (("PAUSA\n\nHa terminado el " + round(((trials_presented_so_far / experiment_trials.nTotal) * 100)).toString()) + "% del experimento. ");
    break_msg = ((break_msg_top + break_msg_middle) + break_msg_bottom);
    show_break = trials_presented_so_far % break_every == 0
    //console.log(trials_presented_so_far)
    //console.log(experiment_trials.nRemaining)
    //console.log(show_break)
    
    
    break_text.setText(break_msg);
    // setup some python lists for storing info about the break_done_touch
    break_done_touch.clicked_name = [];
    gotValidClick = false; // until a click is received
    break_done_keyboard.keys = undefined;
    break_done_keyboard.rt = undefined;
    _break_done_keyboard_allKeys = [];
    psychoJS.experiment.addData('Break.started', globalClock.getTime());
    BreakMaxDuration = null
    // keep track of which components have finished
    BreakComponents = [];
    BreakComponents.push(break_text);
    BreakComponents.push(break_done_touch);
    BreakComponents.push(break_done_keyboard);
    BreakComponents.push(break_done_button);
    BreakComponents.push(break_done_button_label);
    
    BreakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function BreakRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Break' ---
    // get current time
    t = BreakClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // exit the break routine immediately if we are not on a break trial
    // break trials occur every break_every trials (see Begin Experiment)
    
    if (!show_break) {
        continueRoutine = false;
    }
    
    
    // *break_text* updates
    if (t >= 0.0 && break_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_text.tStart = t;  // (not accounting for frame time here)
      break_text.frameNStart = frameN;  // exact frame index
      
      break_text.setAutoDraw(true);
    }
    
    // *break_done_touch* updates
    if (t >= 0.0 && break_done_touch.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_done_touch.tStart = t;  // (not accounting for frame time here)
      break_done_touch.frameNStart = frameN;  // exact frame index
      
      break_done_touch.status = PsychoJS.Status.STARTED;
      break_done_touch.mouseClock.reset();
      prevButtonState = break_done_touch.getPressed();  // if button is down already this ISN'T a new click
      }
    if (break_done_touch.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = break_done_touch.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          break_done_touch.clickableObjects = eval(break_done_button)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(break_done_touch.clickableObjects)) {
              break_done_touch.clickableObjects = [break_done_touch.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of break_done_touch.clickableObjects) {
              if (obj.contains(break_done_touch)) {
                  gotValidClick = true;
                  break_done_touch.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              break_done_touch.clicked_name.push(null);
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *break_done_keyboard* updates
    if (t >= 0.0 && break_done_keyboard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_done_keyboard.tStart = t;  // (not accounting for frame time here)
      break_done_keyboard.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { break_done_keyboard.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { break_done_keyboard.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { break_done_keyboard.clearEvents(); });
    }
    
    if (break_done_keyboard.status === PsychoJS.Status.STARTED) {
      let theseKeys = break_done_keyboard.getKeys({keyList: ['space'], waitRelease: false});
      _break_done_keyboard_allKeys = _break_done_keyboard_allKeys.concat(theseKeys);
      if (_break_done_keyboard_allKeys.length > 0) {
        break_done_keyboard.keys = _break_done_keyboard_allKeys[_break_done_keyboard_allKeys.length - 1].name;  // just the last key pressed
        break_done_keyboard.rt = _break_done_keyboard_allKeys[_break_done_keyboard_allKeys.length - 1].rt;
        break_done_keyboard.duration = _break_done_keyboard_allKeys[_break_done_keyboard_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *break_done_button* updates
    if (t >= 0.0 && break_done_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_done_button.tStart = t;  // (not accounting for frame time here)
      break_done_button.frameNStart = frameN;  // exact frame index
      
      break_done_button.setAutoDraw(true);
    }
    
    
    // *break_done_button_label* updates
    if (t >= 0.0 && break_done_button_label.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_done_button_label.tStart = t;  // (not accounting for frame time here)
      break_done_button_label.frameNStart = frameN;  // exact frame index
      
      break_done_button_label.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    BreakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BreakRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Break' ---
    BreakComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Break.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = break_done_touch.getPos();
    _mouseButtons = break_done_touch.getPressed();
    psychoJS.experiment.addData('break_done_touch.x', _mouseXYs[0]);
    psychoJS.experiment.addData('break_done_touch.y', _mouseXYs[1]);
    psychoJS.experiment.addData('break_done_touch.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('break_done_touch.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('break_done_touch.rightButton', _mouseButtons[2]);
    if (break_done_touch.clicked_name.length > 0) {
      psychoJS.experiment.addData('break_done_touch.clicked_name', break_done_touch.clicked_name[0]);}
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(break_done_keyboard.corr, level);
    }
    psychoJS.experiment.addData('break_done_keyboard.keys', break_done_keyboard.keys);
    if (typeof break_done_keyboard.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('break_done_keyboard.rt', break_done_keyboard.rt);
        psychoJS.experiment.addData('break_done_keyboard.duration', break_done_keyboard.duration);
        routineTimer.reset();
        }
    
    break_done_keyboard.stop();
    // the Routine "Break" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var EndMaxDurationReached;
var EndMaxDuration;
var EndComponents;
function EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'End' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    EndClock.reset(routineTimer.getTime());
    routineTimer.add(5.000000);
    EndMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('End.started', globalClock.getTime());
    EndMaxDuration = null
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(thank_you_bye);
    
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'End' ---
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thank_you_bye* updates
    if (t >= 0.0 && thank_you_bye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thank_you_bye.tStart = t;  // (not accounting for frame time here)
      thank_you_bye.frameNStart = frameN;  // exact frame index
      
      thank_you_bye.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (thank_you_bye.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      thank_you_bye.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'End' ---
    EndComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('End.stopped', globalClock.getTime());
    if (EndMaxDurationReached) {
        EndClock.add(EndMaxDuration);
    } else {
        EndClock.add(5.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var prescreeningFailedMsgMaxDurationReached;
var _key_resp_allKeys;
var prescreeningFailedMsgMaxDuration;
var prescreeningFailedMsgComponents;
function prescreeningFailedMsgRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prescreeningFailedMsg' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    prescreeningFailedMsgClock.reset();
    routineTimer.reset();
    prescreeningFailedMsgMaxDurationReached = false;
    // update component parameters for each repeat
    console.log("starting no consent feedback routine");
    
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // setup some python lists for storing info about the prescreening_failed_button_touch
    prescreening_failed_button_touch.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('prescreeningFailedMsg.started', globalClock.getTime());
    prescreeningFailedMsgMaxDuration = null
    // keep track of which components have finished
    prescreeningFailedMsgComponents = [];
    prescreeningFailedMsgComponents.push(prescreeningFailedTxt);
    prescreeningFailedMsgComponents.push(key_resp);
    prescreeningFailedMsgComponents.push(prescreening_failed_button);
    prescreeningFailedMsgComponents.push(prescreening_failed_button_label);
    prescreeningFailedMsgComponents.push(prescreening_failed_button_touch);
    
    prescreeningFailedMsgComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function prescreeningFailedMsgRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prescreeningFailedMsg' ---
    // get current time
    t = prescreeningFailedMsgClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *prescreeningFailedTxt* updates
    if (t >= 0.0 && prescreeningFailedTxt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prescreeningFailedTxt.tStart = t;  // (not accounting for frame time here)
      prescreeningFailedTxt.frameNStart = frameN;  // exact frame index
      
      prescreeningFailedTxt.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *prescreening_failed_button* updates
    if (t >= 0.0 && prescreening_failed_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prescreening_failed_button.tStart = t;  // (not accounting for frame time here)
      prescreening_failed_button.frameNStart = frameN;  // exact frame index
      
      prescreening_failed_button.setAutoDraw(true);
    }
    
    
    // *prescreening_failed_button_label* updates
    if (t >= 0.0 && prescreening_failed_button_label.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prescreening_failed_button_label.tStart = t;  // (not accounting for frame time here)
      prescreening_failed_button_label.frameNStart = frameN;  // exact frame index
      
      prescreening_failed_button_label.setAutoDraw(true);
    }
    
    // *prescreening_failed_button_touch* updates
    if (t >= 0.0 && prescreening_failed_button_touch.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prescreening_failed_button_touch.tStart = t;  // (not accounting for frame time here)
      prescreening_failed_button_touch.frameNStart = frameN;  // exact frame index
      
      prescreening_failed_button_touch.status = PsychoJS.Status.STARTED;
      prescreening_failed_button_touch.mouseClock.reset();
      prevButtonState = prescreening_failed_button_touch.getPressed();  // if button is down already this ISN'T a new click
      }
    if (prescreening_failed_button_touch.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = prescreening_failed_button_touch.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          prescreening_failed_button_touch.clickableObjects = eval(prescreening_failed_button)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(prescreening_failed_button_touch.clickableObjects)) {
              prescreening_failed_button_touch.clickableObjects = [prescreening_failed_button_touch.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of prescreening_failed_button_touch.clickableObjects) {
              if (obj.contains(prescreening_failed_button_touch)) {
                  gotValidClick = true;
                  prescreening_failed_button_touch.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              prescreening_failed_button_touch.clicked_name.push(null);
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    prescreeningFailedMsgComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prescreeningFailedMsgRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prescreeningFailedMsg' ---
    prescreeningFailedMsgComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('prescreeningFailedMsg.stopped', globalClock.getTime());
    psychoJS.setRedirectUrls("https://app.prolific.com/submissions/complete?cc=C11M775R")
    quitPsychoJS("Terminando experimento.")
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = prescreening_failed_button_touch.getPos();
    _mouseButtons = prescreening_failed_button_touch.getPressed();
    psychoJS.experiment.addData('prescreening_failed_button_touch.x', _mouseXYs[0]);
    psychoJS.experiment.addData('prescreening_failed_button_touch.y', _mouseXYs[1]);
    psychoJS.experiment.addData('prescreening_failed_button_touch.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('prescreening_failed_button_touch.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('prescreening_failed_button_touch.rightButton', _mouseButtons[2]);
    if (prescreening_failed_button_touch.clicked_name.length > 0) {
      psychoJS.experiment.addData('prescreening_failed_button_touch.clicked_name', prescreening_failed_button_touch.clicked_name[0]);}
    // the Routine "prescreeningFailedMsg" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
