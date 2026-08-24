const MASTER_SEED = {"profile":{"preferred_name":"Alex","location":"Your City","timezone":"Local","life_stage":"Building a clearer view of priorities, money, health, relationships, and long-term goals","privacy_note":"Demo data only. Your changes are stored locally on this device."},"dashboard":{"top_questions":["What needs my attention today?","Am I on track financially?","What changed recently?","What is coming up next?","What single action moves me forward most?"],"daily_focus_limit":3},"life_areas":[{"id":"finances","name":"Finances","priority":1,"status":"Building a stronger monthly buffer","goals":["Protect a daily spending floor","Cover upcoming bills","Build an emergency fund","Use sinking funds for planned expenses"],"known_preferences":["Keep spending, bills, emergency, and sinking money visible","Plan bills around paydays"]},{"id":"career","name":"Career","priority":2,"status":"Developing skills and exploring the next opportunity","goals":["Clarify the next role","Build one useful skill at a time","Keep applications and next actions visible"]},{"id":"health","name":"Health","priority":3,"status":"Building consistent movement, sleep, and recovery habits","goals":["Move consistently","Improve sleep routine","Track simple health trends"]},{"id":"family","name":"Family","priority":4,"status":"Keeping important people and dates visible","goals":["Remember important events","Protect family time","Keep key information easy to find"]},{"id":"relationships","name":"Relationships and Com","priority":5,"status":"Maintaining relationships intentionally","goals":["Keep in touch without relying on memory","Use gentle contact cadences","Keep outreach human-controlled"]},{"id":"technology","name":"Technology","priority":6,"status":"Keeping useful tools organized","goals":["Reduce friction in daily systems","Keep important setup notes accessible"]},{"id":"growth","name":"Personal Growth","priority":7,"status":"Making steady progress on long-term goals","goals":["Focus on the next useful action","Review progress regularly","Avoid overloading the plan"]}],"major_expenses":[{"name":"Emergency buffer","target_amount":1500,"saved_amount":450,"priority":"High","purpose":"Extra cash for unexpected expenses"},{"name":"Car maintenance","target_amount":800,"saved_amount":250,"priority":"High","purpose":"Routine maintenance and repairs"},{"name":"Weekend trip","target_amount":600,"saved_amount":120,"priority":"Medium","purpose":"Planned travel without using debt"},{"name":"Course or certification","target_amount":500,"saved_amount":100,"priority":"Medium","purpose":"Career development"}],"family_seed":[{"id":"alex","name":"Alex Morgan","relationship":"Self","parent_ids":[],"child_ids":["casey"],"partner_ids":["jordan"],"sibling_ids":[],"household_id":"demo-household"},{"id":"jordan","name":"Jordan Morgan","relationship":"Partner","parent_ids":[],"child_ids":["casey"],"partner_ids":["alex"],"sibling_ids":[],"household_id":"demo-household"},{"id":"casey","name":"Casey Morgan","relationship":"Child","birthday":"2016-05-14","parent_ids":["alex","jordan"],"child_ids":[],"partner_ids":[],"sibling_ids":[],"household_id":"demo-household"}],"current_technology":[{"device":"Phone","role":"Primary Dawn View device"},{"device":"Laptop","role":"Planning, backups, and larger-screen access"}],"finance":{"status":"Demo budget","currency":"USD","daily_spending_floor":300,"sinking_allocations":[{"id":"sink-car","name":"Car maintenance","amount":250,"notes":"Routine service and repair reserve"}],"accounts":[{"id":"daily","name":"Daily Spending","balance":425.0,"type":"checking","active":true},{"id":"bills","name":"Bills","balance":850.0,"type":"checking","active":true},{"id":"emergency","name":"Emergency","balance":450.0,"type":"savings","active":true},{"id":"sinking","name":"Sinking","balance":370.0,"type":"savings","active":true}],"income_sources":[{"id":"primary","name":"Primary Job","type":"fixed","frequency":"biweekly","expected_amount":1450,"active":true},{"id":"side","name":"Side Work","type":"variable","frequency":"weekly","expected_amount":200,"active":true}],"recurring_bills":[{"id":"rent","name":"Rent","amount":900,"due_day":1,"category":"Housing","account_id":"bills","autopay":false,"active":true},{"id":"phone","name":"Phone","amount":65,"due_day":8,"category":"Utilities","account_id":"bills","autopay":true,"active":true},{"id":"internet","name":"Internet","amount":70,"due_day":12,"category":"Utilities","account_id":"bills","autopay":true,"active":true},{"id":"insurance","name":"Auto Insurance","amount":145,"due_day":15,"category":"Insurance","account_id":"bills","autopay":true,"active":true},{"id":"card","name":"Credit Card","amount":75,"due_day":21,"category":"Debt","account_id":"bills","autopay":false,"active":true},{"id":"electric","name":"Electric","amount":120,"due_day":26,"category":"Utilities","account_id":"bills","autopay":false,"active":true}],"debts":[{"id":"debt-card","name":"Credit Card","balance":1850,"limit":5000,"apr":24.99,"minimum_payment":75,"type":"credit_card","active":true},{"id":"debt-loan","name":"Personal Loan","balance":4200,"limit":0,"apr":8.5,"minimum_payment":140,"type":"installment","active":true}],"planning":{"next_pay_date":"2026-08-28","next_paycheck_amount":1450,"security_income_this_week":200,"security_income_this_month":600,"other_planned_spending":75,"emergency_fund_target":1500,"security_scenarios":[0,100,200,300]}},"today":{"date":"","top_priorities":[{"id":"p1","text":"Review today’s schedule","done":false},{"id":"p2","text":"Check upcoming bills","done":false},{"id":"p3","text":"Complete one important project action","done":false}],"quick_notes":"","daily_templates":{"Sunday":["Reset the upcoming week","Review money and upcoming bills","Make time for recovery"],"Monday":["Review today’s schedule","Complete one important work action","Do a short workout or walk"],"Tuesday":["Handle the highest-priority task","Check tomorrow’s commitments","Reach out to one person if needed"],"Wednesday":["Run a midweek money check","Complete one project action","Do a short workout or recovery session"],"Thursday":["Protect focus time","Review the next two days","Handle one household or personal task"],"Friday":["Close open loops from the week","Review weekend spending","Make time for family or friends"],"Saturday":["Do a weekly reset","Move one personal goal forward","Recover and recharge"]}},"health":{"weight":null,"weight_goal":null,"cpap_last_night":false,"knee_pain":null,"exercise_minutes":20,"water_cups":6,"status_note":"Demo wellness check-in. Customize these fields and routines for your own needs."},"career":{"target_role":"Next role or career goal","salary_goal":70000,"shrm_progress":20,"courses_completed":["Sample professional development course"],"next_action":"Complete one skill-building or job-search action."},"projects":[{"id":"project-1","name":"Improve monthly finances","next_action":"Review the next payday plan","progress":35,"status":"In Progress"},{"id":"project-2","name":"Career development","next_action":"Complete one learning session","progress":25,"status":"In Progress"},{"id":"project-3","name":"Home organization","next_action":"Finish one small area","progress":50,"status":"In Progress"},{"id":"project-4","name":"Plan a weekend trip","next_action":"Set a target budget","progress":15,"status":"Planned"}],"crm":{"contacts":[{"id":"contact-jordan","name":"Jordan Morgan","relationship":"Partner","category":"Immediate Family","phone":"","birthday":"","preferred_channel":"Either","cadence_days":7,"last_contact":"","next_followup":"2026-08-24","last_topic":"Weekend plans","notes":"Demo contact","active":true},{"id":"contact-sam","name":"Sam Lee","relationship":"Friend","category":"Close Friend","phone":"","birthday":"1992-10-03","preferred_channel":"Text","cadence_days":21,"last_contact":"2026-08-10","next_followup":"2026-08-31","last_topic":"New job","notes":"Ask how the new role is going","active":true}],"notes":"Demo relationship reminders. Outreach stays human-controlled.","default_cadence_days":30,"outreach_window_days":7,"message_templates":{"check_in":"Hey {first}, just checking in. How have you been?","follow_up":"Hey {first}, I was thinking about {topic}. How have things been going?","birthday":"Happy birthday, {first}! Hope you have a great day."}},"knowledge":{"notes":[{"id":"note-demo","title":"Demo note","category":"Reference","content":"Use Knowledge to keep instructions, reference material, and ideas easy to find."}],"categories":["Survival","Finance","Career","Health","Family","Technology","Ideas","Reference"],"survival_guides":[{"id":"survival-priorities","title":"First 10 Minutes: Stop, Think, Observe, Plan","priority":"Start here","steps":["Stop moving unless the location is immediately dangerous. Slow breathing and check yourself and others for life-threatening bleeding.","Think through the most urgent threat: injury, fire, exposure, unsafe structure, rising water, violence, or getting lost.","Observe resources, weather, daylight, exits, people, phone battery, water, clothing, and shelter.","Plan one simple next action. Tell someone your plan when communication is available."],"warning":"Do not rush into traffic, floodwater, fire, unstable buildings, or an active threat."},{"id":"survival-water","title":"Water: Find, Treat, Ration Effort—not Water","priority":"Critical","steps":["Prefer sealed water, a water heater tank, melted ice, or a known safe municipal source.","Clear water can still contain pathogens. Bring water to a rolling boil for 1 minute; above 6,500 feet, boil for 3 minutes.","When boiling is impossible, use an EPA-registered purifier exactly as labeled. A basic filter may not remove viruses or chemicals.","Avoid seawater, urine, radiator water, pool water, and water with fuel, chemical, or algae contamination."],"warning":"Dehydration becomes dangerous quickly in heat. Reduce exertion and seek shade."},{"id":"survival-shelter","title":"Shelter, Heat, and Cold Exposure","priority":"Critical","steps":["Get out of wind, rain, direct sun, and contact with cold ground. Insulate underneath yourself first.","Replace wet clothing when possible. Layer dry fabric loosely and cover the head and neck.","For heat, move to shade, loosen clothing, cool the skin, and sip safe fluids. Confusion, collapse, or hot altered behavior is an emergency.","Use ventilation with any flame or fuel-burning heater."],"warning":"Never use grills, generators, or fuel-burning stoves inside a home, garage, tent, or enclosed space because of carbon monoxide."},{"id":"survival-fire","title":"Fire: Escape, Extinguish, and Signal","priority":"High","steps":["For a building fire, leave immediately, crawl below smoke, close doors behind you, and do not re-enter.","Use an extinguisher only on a small contained fire with a clear exit behind you: Pull, Aim at base, Squeeze, Sweep.","For a survival fire, clear the area to bare mineral soil, keep water nearby, and fully drown and stir ashes before leaving.","Three repeated signals—whistle blasts, flashes, fires, or markings—commonly communicate distress."],"warning":"Do not fight a spreading fire, a fire involving pressurized containers, or any fire blocking your exit."},{"id":"survival-navigation","title":"Lost: Stay Findable and Navigate Carefully","priority":"High","steps":["When safe, stay near the point where you realized you were lost; rescuers search from your last known location.","Send your location by text, conserve battery with airplane mode between check-ins, and keep the phone warm.","Use visible contrast, an open area, a whistle, and repeated signals. Sound often travels farther than shouting.","Move only for a clear safety reason or a known nearby route. Mark direction and time before moving."],"warning":"Do not follow a stream blindly; terrain may become steeper, colder, or impassable."},{"id":"survival-bleeding","title":"Severe Bleeding and Basic First Aid","priority":"Medical emergency","steps":["Call 911. Apply firm direct pressure with cloth or gauze and keep pressure continuously.","For life-threatening arm or leg bleeding that will not stop, apply a commercial tourniquet 2–3 inches above the wound, not over a joint; tighten until bleeding stops and note the time.","Do not remove embedded objects. Stabilize them and press around the wound.","Keep the person still and warm. Do not give food or drink when surgery may be needed."],"warning":"This is emergency guidance, not a substitute for hands-on first-aid training."},{"id":"survival-earthquake","title":"Earthquake Actions","priority":"Regional hazard","steps":["During shaking: Drop, Cover, and Hold On. Protect your head and neck; stay away from windows.","After shaking, check injuries, gas odor or hissing, fire, damaged wiring, and unstable structures.","Expect aftershocks. Wear sturdy shoes and use text messages instead of calls when networks are congested.","Keep at least several days of water, medications, lighting, battery power, and shelf-stable food accessible."],"warning":"Do not use matches, switches, or flames if you smell gas. Leave and report it from a safe location."},{"id":"survival-wildfire","title":"Wildfire Evacuation Readiness","priority":"Regional hazard","steps":["Leave early when ordered; do not wait to see flames. Know two routes and keep the vehicle fueled.","Pack identification, medications, water, chargers, masks, sturdy clothing, and essential family or pet supplies.","Close windows and vents, turn on headlights, drive slowly, and watch for emergency vehicles and falling debris.","If trapped, call 911 with precise location and move to a cleared area away from vegetation when possible."],"warning":"Never drive through dense smoke or flames when the road and destination are not visible."}]},"scoreboard":{"finance":55,"health":60,"career":50,"family":70,"relationships":55,"projects":45},"income_estimator":{"uagc_rate":25.0,"uagc_hours":80,"uagc_withholding_percent":18,"uagc_next_payday":"2026-08-28","security_net_hourly_rate":22.0,"security_hours_this_week":8,"security_next_payday":"2026-08-25","security_notes":"Sample variable income","actual_uagc_deposit":0,"actual_security_deposit":0,"security_overtime_enabled":false,"security_overtime_hours":0,"security_overtime_multiplier":1.5},"tracking":{"selected_month":"2026-08","current_date":"2026-08-24","next_payday":"2026-08-25","bill_instances":[],"paycheck_records":[{"id":"pay-side-2026-08-25","source":"Side Work","pay_date":"2026-08-25","estimated_net":176,"actual_net":0,"status":"expected","notes":"Sample weekly income"},{"id":"pay-primary-2026-08-28","source":"Primary Job","pay_date":"2026-08-28","estimated_net":1450,"actual_net":0,"status":"expected","notes":"Sample biweekly income"}],"payday_anchors":{"Side Work":"2026-08-25","Primary Job":"2026-08-28"}},"decision_simulator":{"saved_scenarios":[]},"app":{"version":"2.16.0-web-preview","storage_engine":"IndexedDB","master_seed":"embedded demo seed","theme":"dawn_view_neon","architecture":"PWA / web"},"training":{"selected_date":"","schedule":{"Monday":[{"time":"6:00 PM","title":"HOME • Strength","type":"Home Workout","notes":"Short full-body session."}],"Tuesday":[{"time":"6:30 PM","title":"WALK • Easy cardio","type":"Personal","notes":"Comfortable pace."}],"Wednesday":[{"time":"6:00 PM","title":"HOME • Mobility + core","type":"Home Workout","notes":"Easy recovery-focused session."}],"Thursday":[{"time":"6:00 PM","title":"GYM • Full body","type":"Gym","notes":"Use machines or free weights at a comfortable level."}],"Friday":[{"time":"6:30 PM","title":"RECOVERY • Light movement","type":"Personal","notes":"Walk, stretch, or rest based on recovery."}],"Saturday":[{"time":"10:00 AM","title":"GYM • Full body","type":"Gym","notes":"Optional second gym session."}],"Sunday":[{"time":"9:00 AM","title":"RESET • Mobility + planning","type":"Personal","notes":"Light movement and weekly reset."}]},"workouts":{"Monday":[{"name":"Incline or wall push-up","target":"2 × 6–10","description":"Use a stable surface and a comfortable angle."},{"name":"Band or cable row","target":"2 × 8–12","description":"Pull smoothly toward the ribs."},{"name":"Chair sit-to-stand","target":"2 × 6–10","description":"Use a comfortable range and support as needed."}],"Tuesday":[{"name":"Easy walk or bike","target":"15–25 min","description":"Keep the pace conversational."}],"Wednesday":[{"name":"Bird dog","target":"2 × 5/side","description":"Move slowly while keeping the torso steady."},{"name":"Glute bridge","target":"2 × 8–12","description":"Use a comfortable range."},{"name":"Gentle mobility","target":"5–10 min","description":"Focus on areas that feel stiff."}],"Thursday":[{"name":"Chest press","target":"2 × 8–12","description":"Use a manageable load and smooth reps."},{"name":"Seated row","target":"2 × 8–12","description":"Keep the chest tall and shoulders relaxed."},{"name":"Leg press or sit-to-stand","target":"2 × 8–12","description":"Use a comfortable range."},{"name":"Easy cardio","target":"5–10 min","description":"Finish at an easy pace."}],"Friday":[{"name":"Recovery walk + mobility","target":"10–20 min","description":"Keep it easy and restorative."}],"Saturday":[{"name":"Full-body strength","target":"2 sets each","description":"Choose 4–5 movements you can perform with good form."},{"name":"Easy cardio","target":"10 min","description":"Keep the pace comfortable."}],"Sunday":[{"name":"Mobility reset","target":"10 min","description":"Move through a comfortable range and prepare for the week."}]},"logs":{},"alternative_workouts":{"Monday":[{"name":"10-minute fallback","target":"10 min","description":"Do a short walk, mobility session, or simple bodyweight circuit instead."}],"Tuesday":[{"name":"10-minute fallback","target":"10 min","description":"Do a short walk, mobility session, or simple bodyweight circuit instead."}],"Wednesday":[{"name":"10-minute fallback","target":"10 min","description":"Do a short walk, mobility session, or simple bodyweight circuit instead."}],"Thursday":[{"name":"10-minute fallback","target":"10 min","description":"Do a short walk, mobility session, or simple bodyweight circuit instead."}],"Friday":[{"name":"10-minute fallback","target":"10 min","description":"Do a short walk, mobility session, or simple bodyweight circuit instead."}],"Saturday":[{"name":"10-minute fallback","target":"10 min","description":"Do a short walk, mobility session, or simple bodyweight circuit instead."}],"Sunday":[{"name":"10-minute fallback","target":"10 min","description":"Do a short walk, mobility session, or simple bodyweight circuit instead."}]},"plan_version":"shareable-0.1"}};
const DB_NAME = "DawnViewDB";
const STORE = "state";
const KEY = "master";
let state = null;
let editType = null;
let editId = null;
let selectedPerson = "jay";
let editingSinkingAllocationId = null;

const $ = id => document.getElementById(id);
const money = n => "$" + Number(n || 0).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2});
const active = arr => (arr || []).filter(x => x.active !== false);
const uid = p => `${p}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
const clone = value => {
  if (value === undefined) return undefined;
  if (typeof structuredClone === "function") return structuredClone(value);
  return JSON.parse(JSON.stringify(value));
};

function openDB(){
  return new Promise((resolve,reject)=>{
    const request=indexedDB.open(DB_NAME,1);
    request.onupgradeneeded=()=>request.result.createObjectStore(STORE);
    request.onsuccess=()=>resolve(request.result);
    request.onerror=()=>reject(request.error);
  });
}
async function dbGet(){
  const db=await openDB();
  return new Promise((resolve,reject)=>{
    const tx=db.transaction(STORE,"readonly");
    const req=tx.objectStore(STORE).get(KEY);
    req.onsuccess=()=>resolve(req.result);
    req.onerror=()=>reject(req.error);
  });
}
async function dbPut(value){
  const db=await openDB();
  return new Promise((resolve,reject)=>{
    const tx=db.transaction(STORE,"readwrite");
    tx.objectStore(STORE).put(value,KEY);
    tx.oncomplete=resolve;
    tx.onerror=()=>reject(tx.error);
  });
}
function validData(v){
  return !!(v?.finance && Array.isArray(v.finance.accounts) && Array.isArray(v.finance.recurring_bills) && Array.isArray(v.finance.debts));
}
function hydrate(base,saved){
  if(Array.isArray(base)) return Array.isArray(saved)?saved:base;
  if(base && typeof base==="object"){
    const out={...base};
    if(saved && typeof saved==="object" && !Array.isArray(saved)){
      for(const [k,v] of Object.entries(saved)) out[k]=k in base?hydrate(base[k],v):v;
    }
    return out;
  }
  return saved===undefined||saved===null?base:saved;
}
async function loadState(){
  try{
    const saved=await dbGet();
    if(validData(saved)){
      state=hydrate(MASTER_SEED,saved);
      // v2.13.1: attach bundled Monday demos to matching existing exercises without replacing user customization.
      const mondayMedia=Object.fromEntries((MASTER_SEED.training?.workouts?.Monday||[]).filter(x=>x.media).map(x=>[x.name,{media:x.media,mediaLabel:x.mediaLabel}]));
      for(const ex of (state.training?.workouts?.Monday||[])){
        const builtIn=mondayMedia[ex.name];
        if(builtIn&&!ex.media){ex.media=builtIn.media;ex.mediaLabel=ex.mediaLabel||builtIn.mediaLabel;}
      }
      // v2.14.0: normalize older relationship contacts without overwriting user-entered data.
      state.crm=state.crm||clone(MASTER_SEED.crm);
      state.crm.contacts=Array.isArray(state.crm.contacts)?state.crm.contacts:[];
      state.crm.default_cadence_days=Number(state.crm.default_cadence_days||MASTER_SEED.crm.default_cadence_days||30);
      state.crm.outreach_window_days=Number(state.crm.outreach_window_days||MASTER_SEED.crm.outreach_window_days||7);
      for(const contact of state.crm.contacts){
        if(contact.active===undefined)contact.active=true;
        if(!contact.category)contact.category="Friend";
        if(contact.category==="Family")contact.category="Immediate Family";
        if(contact.category==="Recruiter"||contact.category==="Mentor")contact.category="Professional";
        if(!contact.preferred_channel)contact.preferred_channel="Either";
        if(contact.cadence_days===undefined||contact.cadence_days===null||contact.cadence_days==="")contact.cadence_days=state.crm.default_cadence_days;
        if(!contact.next_followup)contact.next_followup=contact.last_contact?addDaysKey(contact.last_contact,Number(contact.cadence_days||30)):localDateKey();
      }
      const previousVersion=state.app?.version||"0";
      if(previousVersion!==MASTER_SEED.app.version){
        state.training=state.training||{};
        state.training.schedule=clone(MASTER_SEED.training.schedule);
        // Preserve user-customized workouts across app upgrades.
        state.training.workouts=state.training.workouts||clone(MASTER_SEED.training.workouts);
        state.training.alternative_workouts=state.training.alternative_workouts||clone(MASTER_SEED.training.alternative_workouts);
        state.training.plan_version=state.training.plan_version||MASTER_SEED.training.plan_version;
        state.today=state.today||{};
        state.today.daily_templates=clone(MASTER_SEED.today.daily_templates);
        state.today.date="";
        state.tracking=state.tracking||{};
        state.tracking.payday_anchors={"Primary Job":"2026-08-28","Side Work":"2026-08-25"};
        state.tracking.current_date=localDateKey();
        state.tracking.selected_month=localDateKey().slice(0,7);
        state.tracking.next_payday=state.income_estimator?.security_next_payday||"";
        state.income_estimator=state.income_estimator||{};
        state.income_estimator.uagc_next_payday="";
        state.income_estimator.security_next_payday="";
        state.finance.planning.next_pay_date="";
        const seededPaychecks=clone(MASTER_SEED.tracking.paycheck_records||[]);
        state.tracking.paycheck_records=state.tracking.paycheck_records||[];
        for(const seeded of seededPaychecks){
          if(!state.tracking.paycheck_records.some(x=>x.source===seeded.source&&x.pay_date===seeded.pay_date)) state.tracking.paycheck_records.push(seeded);
        }
        state.app={...(state.app||{}),...MASTER_SEED.app};
        await dbPut(state).catch(()=>{});
      }
      return "IndexedDB";
    }
  }catch(error){ console.warn(error); }
  state=clone(MASTER_SEED);
  await dbPut(state).catch(()=>{});
  return "Master seed";
}
async function persist(){
  try{ await dbPut(state); }
  catch(error){ console.warn("Could not save to IndexedDB",error); }
}
function finance(){ return state.finance; }
function accounts(){ return finance().accounts; }
function bills(){ return finance().recurring_bills; }
function debts(){ return finance().debts; }
function account(id){ return accounts().find(x=>x.id===id); }
function cash(){ return active(accounts()).reduce((s,x)=>s+Number(x.balance||0),0); }
function billTotal(){ return active(bills()).reduce((s,x)=>s+Number(x.amount||0),0); }
function billsBalance(){ return Number(account("bills")?.balance||0); }
function dailyBalance(){ return Number(account("daily")?.balance||0); }
function dailySpendable(){ return Math.max(0,dailyBalance()-Number(finance().daily_spending_floor||0)); }
function sinkingBalance(){ return Number(account("sinking")?.balance||0); }
function sinkingAllocations(){ finance().sinking_allocations=Array.isArray(finance().sinking_allocations)?finance().sinking_allocations:[];return finance().sinking_allocations; }
function sinkingAllocated(){ return sinkingAllocations().reduce((sum,x)=>sum+Math.max(0,Number(x.amount||0)),0); }
function sinkingUnallocated(){ return Math.max(0,sinkingBalance()-sinkingAllocated()); }
function safeToSpend(){ return dailySpendable()+sinkingUnallocated(); }
function cardDebts(){ return active(debts()).filter(x=>x.type==="credit_card"); }
function overLimit(){ return cardDebts().filter(x=>Number(x.limit)>0&&Number(x.balance)>Number(x.limit)); }
function utilization(){
  const limit=cardDebts().reduce((s,x)=>s+Number(x.limit||0),0);
  return limit?Math.round(cardDebts().reduce((s,x)=>s+Number(x.balance||0),0)/limit*100):0;
}
function monthEnd(){
  const p=finance().planning;
  return cash()+Number(p.next_paycheck_amount||0)-billTotal()-Number(p.other_planned_spending||0);
}
function plannerValues(){
  return {
    uagc_rate:Number($("uagcRate").value||0),
    uagc_hours:Number($("uagcHours").value||0),
    uagc_withholding:Number($("uagcWithholding").value||0),
    uagc_payday:$("uagcPayday").value,
    security_rate:Number($("securityRate").value||0),
    security_hours:Number($("securityHours").value||0),
    security_overtime_enabled:$("securityOvertimeEnabled").checked,
    security_overtime_hours:Number($("securityOvertimeHours").value||0),
    security_overtime_multiplier:Number($("securityOvertimeMultiplier").value||1.5),
    security_payday:$("securityPayday").value,
    security_notes:$("securityNotes").value.trim(),
    other_spending:Number(finance().planning.other_planned_spending||0),
    other_notes:finance().planning.other_planned_spending_notes||"",
    floor:Number(finance().daily_spending_floor||0)
  };
}
function plannerCalc(v=plannerValues()){
  const uagcGross=v.uagc_rate*v.uagc_hours;
  const uagcNet=Math.max(0,uagcGross-(uagcGross*v.uagc_withholding/100));
  const securityRegular=v.security_rate*v.security_hours;
  const securityOvertimeRate=v.security_rate*Math.max(1,v.security_overtime_multiplier||1.5);
  const securityOvertime=v.security_overtime_enabled?securityOvertimeRate*v.security_overtime_hours:0;
  const securityNet=securityRegular+securityOvertime;
  const total=uagcNet+securityNet;
  const gap=Math.max(0,billTotal()-billsBalance());
  const restore=Math.max(0,v.floor-dailyBalance());
  const remaining=total-gap-restore-v.other_spending;
  return {v,uagcNet,securityNet,securityRegular,securityOvertime,securityOvertimeRate,total,gap,restore,remaining};
}
function selectedMonth(){ return state.tracking.selected_month || new Date().toISOString().slice(0,7); }
function monthRecords(){ return (state.tracking.bill_instances||[]).filter(x=>x.month===selectedMonth()); }
function dueDate(x){ return `${x.month}-${String(x.due_day||1).padStart(2,"0")}`; }
function normalizedBillName(value){
  return String(value||"").trim().toLowerCase().replace(/\s+/g," ");
}
function syncBillInstancesWithRecurring(){
  const instances=state.tracking?.bill_instances||[];
  const recurringBills=bills();
  const recurringById=new Map(recurringBills.map(b=>[String(b.id),b]));
  const recurringByName=new Map();
  for(const bill of recurringBills){
    const key=normalizedBillName(bill.name);
    if(!key)continue;
    // Only use a name fallback when the name uniquely identifies one recurring bill.
    if(recurringByName.has(key))recurringByName.set(key,null);
    else recurringByName.set(key,bill);
  }
  const currentMonth=(state.tracking?.current_date||new Date().toISOString().slice(0,10)).slice(0,7);
  let changed=false;
  for(const instance of instances){
    let recurring=instance.bill_id!=null?recurringById.get(String(instance.bill_id)):null;
    if(!recurring){
      recurring=recurringByName.get(normalizedBillName(instance.name))||null;
      if(recurring&&String(instance.bill_id||"")!==String(recurring.id)){
        instance.bill_id=recurring.id;
        changed=true;
      }
    }
    if(!recurring)continue;

    const isOpen=instance.status!=="paid"&&instance.status!=="skipped";
    const isCurrentOrFuture=String(instance.month||"")>=currentMonth;
    // Completed historical records remain historical. Open/current and future instances follow the recurring bill.
    if(!isOpen&&!isCurrentOrFuture)continue;

    const dueDay=Math.min(31,Math.max(1,Number(recurring.due_day||1)));
    const amount=Math.max(0,Number(recurring.amount||0));
    if(instance.name!==recurring.name){instance.name=recurring.name;changed=true;}
    if(Number(instance.due_day||1)!==dueDay){instance.due_day=dueDay;changed=true;}
    if(isOpen&&Number(instance.expected_amount||0)!==amount){instance.expected_amount=amount;changed=true;}
  }
  return changed;
}
function unpaid(x){
  if(x.status==="paid"||x.status==="skipped") return 0;
  if(x.status==="partial") return Math.max(0,Number(x.expected_amount||0)-Number(x.actual_amount||0));
  // Funded is a planning marker only: the full bill still needs to be paid.
  return Math.max(0,Number(x.expected_amount||0));
}
function billStatusLabel(x){
  if(x.status==="funded") return '<span class="bill-state funded">✓ Funded · still needs payment</span>';
  if(x.status==="paid") return '<span class="bill-state paid">✓ Paid</span>';
  if(x.status==="partial") return `<span class="bill-state partial">Partial · ${money(unpaid(x))} left</span>`;
  return '<span class="bill-state upcoming">Needs funding</span>';
}

function renderStatus(source){
  $("dataStatus").innerHTML=`<strong>Data loaded:</strong> ${accounts().length} accounts, ${bills().length} bills, ${debts().length} debts. Source: ${source}.`;
}
function ensureDailyFocus(){
  state.today=state.today||clone(MASTER_SEED.today);
  state.today.daily_templates=state.today.daily_templates||clone(MASTER_SEED.today.daily_templates);
  const key=localDateKey(),day=todayName();
  if(state.today.date!==key){
    const items=state.today.daily_templates[day]||MASTER_SEED.today.daily_templates[day]||[];
    state.today.date=key;
    state.today.top_priorities=items.slice(0,3).map((text,i)=>({id:`${key}-p${i+1}`,text,done:false}));
    state.today.quick_notes="";
    persist();
  }
}
function recentTrainingSessions(days=7){
  const logs=trainingState().logs||{},today=parseDateKey(localDateKey())||new Date();
  return Object.entries(logs).filter(([key,log])=>{
    const d=parseDateKey(key);if(!d)return false;const age=Math.round((today-d)/86400000);
    if(age<0||age>=days)return false;
    return [...Object.values(log.exercises||{}),...Object.values(log.alternativeExercises||{})].some(x=>x?.done);
  }).length;
}
function lifeStatusData(priorityDue,unfundedDue){
  const dailyFloor=Number(finance().daily_spending_floor||0),daily=dailyBalance(),sessions=recentTrainingSessions(7);
  const overdue=crmAttentionList().filter(x=>x.attention.days<0).length;
  const dueSoon=crmAttentionList().filter(x=>x.attention.days>=0).length;
  const activeProjects=(state.projects||[]).filter(x=>String(x.status||"").toLowerCase().includes("progress")).length;
  const financial=unfundedDue>0
    ? {name:"Financial",tone:"attention",status:"ACTION NEEDED",momentum:"↓",why:`${money(unfundedDue)} still needs funding before the next payday.`,win:`${money(priorityDue-unfundedDue)} of ${money(priorityDue)} covered.`,next:"Fund the remaining upcoming bills."}
    : daily<dailyFloor
      ? {name:"Financial",tone:"building",status:"BUILDING",momentum:"→",why:"Upcoming bills are covered, but Daily Spending is below its protected floor.",win:"Bills due before the next payday are covered.",next:`Rebuild Daily Spending toward ${money(dailyFloor)}.`}
      : {name:"Financial",tone:"stable",status:"STABLE",momentum:"↑",why:"Upcoming bills are covered and the Daily Spending floor is protected.",win:`${money(dailySpendable())} above the protected Daily Spending floor.`,next:"Keep building the Bills cushion and protect spending boundaries."};
  const health=sessions>=3
    ? {name:"Health",tone:"stable",status:"ON TRACK",momentum:"↑",why:`${sessions} training sessions completed in the last 7 days.`,win:"Training consistency is building.",next:"Complete today’s planned training or recovery block."}
    : sessions>0
      ? {name:"Health",tone:"building",status:"BUILDING",momentum:"↑",why:`${sessions} training session${sessions===1?"":"s"} completed in the last 7 days.`,win:"Recent training activity is logged.",next:"Complete today’s planned training or recovery block."}
      : {name:"Health",tone:"attention",status:"ATTENTION",momentum:"→",why:"No completed training session is logged in the last 7 days.",win:"Your workout plan is ready when you are.",next:"Complete one manageable training or recovery action today."};
  const career={name:"Career",tone:"building",status:"ACTIVE",momentum:"→",why:state.career?.next_action||"A career direction is defined.",win:`Target: ${state.career?.target_role||"Career development"}.`,next:state.career?.next_action||"Choose one concrete career action."};
  const people=overdue>0
    ? {name:"People",tone:"attention",status:"ATTENTION",momentum:"↓",why:`${overdue} relationship${overdue===1?" is":"s are"} overdue for contact.`,win:dueSoon?`${dueSoon} additional check-in${dueSoon===1?" is":"s are"} coming up.`:"Com is tracking follow-ups.",next:"Reach out to one overdue person."}
    : {name:"People",tone:"stable",status:"CLEAR",momentum:"→",why:dueSoon?`${dueSoon} check-in${dueSoon===1?" is":"s are"} coming up; none overdue.`:"No relationship check-ins are overdue.",win:"Relationship queue is under control.",next:dueSoon?"Handle the next scheduled check-in.":"Stay present with the people that matter."};
  const growth={name:"Growth",tone:activeProjects?"stable":"building",status:activeProjects?"ACTIVE":"STEADY",momentum:activeProjects?"↑":"→",why:activeProjects?`${activeProjects} project${activeProjects===1?" is":"s are"} currently in progress.`:"No project is currently marked In Progress.",win:activeProjects?"You have active forward motion.":"Space is available for the next intentional project.",next:state.projects?.find(x=>String(x.status||"").toLowerCase().includes("progress"))?.next_action||"Choose the next growth action when useful."};
  return [financial,health,career,people,growth];
}
function renderLifeStatus(priorityDue,unfundedDue){
  const target=$("lifeStatus");if(!target)return;
  target.innerHTML=lifeStatusData(priorityDue,unfundedDue).map(x=>`<details class="life-status-item ${x.tone}"><summary><span><strong>${x.name}</strong><small>${x.status}</small></span><span class="momentum" aria-label="Momentum">${x.momentum}</span></summary><div class="life-status-detail"><p><strong>Why:</strong> ${escapeHtml(x.why)}</p><p><strong>Recent win:</strong> ${escapeHtml(x.win)}</p><p><strong>Next action:</strong> ${escapeHtml(x.next)}</p></div></details>`).join("");
}
function renderSafeSpend(){
  const target=$("safeSpend");if(!target)return;
  const daily=dailySpendable(),sinking=sinkingBalance(),allocated=sinkingAllocated(),flex=sinkingUnallocated(),total=daily+flex;
  target.innerHTML=`<div class="safe-spend-total"><small>TOTAL FLEXIBLE CAPACITY</small><strong>${money(total)}</strong></div><div class="safe-spend-breakdown"><div><small>Daily spendable</small><strong>${money(daily)}</strong><span>Above ${money(Number(finance().daily_spending_floor||0))} protected floor</span></div><div><small>Flexible sinking</small><strong>${money(flex)}</strong><span>${money(allocated)} allocated from ${money(sinking)} total</span></div></div><p class="muted safe-spend-note">Bills money stays protected. Only the unallocated portion of Sinking contributes to flexible capacity.</p>`;
}
function renderHome(){
  ensureDailyFocus();
  $("priorities").innerHTML=state.today.top_priorities.map((p,i)=>`<label class="priority"><input type="checkbox" data-priority="${i}" ${p.done?"checked":""}><span>${p.text}</span></label>`).join("");
  $("quickNote").value=state.today.quick_notes||"";
  document.querySelectorAll("[data-priority]").forEach(el=>el.onchange=async()=>{state.today.top_priorities[Number(el.dataset.priority)].done=el.checked;await persist();});
  const current=state.tracking.current_date||new Date().toISOString().slice(0,10);
  const nextPayday=nextPaydayAfter(current);
  const monthKey=current.slice(0,7);
  const openBills=(state.tracking.bill_instances||[]).filter(x=>x.month===monthKey&&x.status!=="paid"&&x.status!=="skipped");
  const priorityBills=nextPayday?openBills.filter(x=>dueDate(x)<nextPayday):[];
  const priorityDue=priorityBills.reduce((sum,x)=>sum+unpaid(x),0);
  const fundedDue=priorityBills.filter(x=>x.status==="funded").reduce((sum,x)=>sum+unpaid(x),0);
  const unfundedDue=Math.max(0,priorityDue-fundedDue);
  const fundedPercent=priorityDue?Math.round(fundedDue/priorityDue*100):100;
  const billsCoverage=billsBalance()-priorityDue;
  const coverageMetric=billsCoverage>=0?["Remaining after bills",money(billsCoverage)]:["Still needs funding",money(Math.abs(billsCoverage))];
  const baseVitals=[["Bills account",money(billsBalance())],["Bills before payday",money(priorityDue)],["Bills funded",fundedPercent+"%"],coverageMetric,["Daily spending",money(dailyBalance())],["Over-limit cards",String(overLimit().length)]];
  $("homeMetrics").innerHTML=baseVitals.map(x=>`<div class="metric"><small>${x[0]}</small><strong>${x[1]}</strong></div>`).join("")+`<div class="metric sinking-vital"><small>Sinking fund</small><strong>${money(sinkingBalance())}</strong><span>${money(sinkingAllocated())} reserved • ${money(sinkingUnallocated())} flexible</span></div>`;
  $("nextActions").innerHTML=[["Finance",unfundedDue>0?`Fund ${money(unfundedDue)} before payday`:"Upcoming bills covered"],["Career",state.career.next_action],["Health","Complete today’s planned training or recovery"],["People",crmAttentionList().some(x=>x.attention.days<0)?"Reach out to one overdue contact":"Relationship queue is clear"]].map(x=>`<div class="row"><div><strong>${x[0]}</strong><br><small>${x[1]}</small></div></div>`).join("");
  renderLifeStatus(priorityDue,unfundedDue);
  renderSafeSpend();
  renderRelationshipNudge();
}
function crmState(){
  state.crm=state.crm||clone(MASTER_SEED.crm);
  state.crm.contacts=Array.isArray(state.crm.contacts)?state.crm.contacts:[];
  state.crm.default_cadence_days=Number(state.crm.default_cadence_days||30);
  state.crm.outreach_window_days=Number(state.crm.outreach_window_days||7);
  return state.crm;
}
function parseDateKey(key){
  const m=String(key||"").match(/^(\d{4})-(\d{2})-(\d{2})$/);if(!m)return null;
  return new Date(Number(m[1]),Number(m[2])-1,Number(m[3]),12,0,0,0);
}
function addDaysKey(key,days){const d=parseDateKey(key)||new Date();d.setDate(d.getDate()+Number(days||0));return localDateKey(d);}
function daysBetweenKeys(from,to){const a=parseDateKey(from),b=parseDateKey(to);if(!a||!b)return 0;return Math.round((b-a)/86400000);}
function activeCrmContacts(){return crmState().contacts.filter(x=>x.active!==false);}
function normalizeContact(contact){
  const crm=crmState();
  contact.active=contact.active!==false;
  contact.cadence_days=contact.cadence_days===0||contact.cadence_days==="0"?0:Math.max(1,Number(contact.cadence_days||crm.default_cadence_days||30));
  contact.preferred_channel=contact.preferred_channel||"Either";
  contact.category=contact.category||"Friend";
  if(!contact.next_followup&&contact.cadence_days>0)contact.next_followup=contact.last_contact?addDaysKey(contact.last_contact,contact.cadence_days):localDateKey();
  if(contact.cadence_days===0)contact.next_followup="";
  return contact;
}
function nextBirthdayKey(contact){
  const raw=parseDateKey(contact.birthday);if(!raw)return "";
  const now=parseDateKey(localDateKey()),year=now.getFullYear();
  let d=new Date(year,raw.getMonth(),raw.getDate(),12,0,0,0);if(d<now)d=new Date(year+1,raw.getMonth(),raw.getDate(),12,0,0,0);
  return localDateKey(d);
}
function contactAttention(contact){
  normalizeContact(contact);const today=localDateKey(),follow=contact.next_followup||"",birthday=nextBirthdayKey(contact);let date="",reason="";
  if(follow){date=follow;reason="Check-in";}
  if(birthday&&!(birthday===today&&contact.last_contact===today)&&(!date||birthday<date)){date=birthday;reason="Birthday";}
  const days=date?daysBetweenKeys(today,date):9999;
  return {date,days,reason,status:days<0?"overdue":days===0?"today":"upcoming"};
}
function contactStatusLabel(contact){
  const a=contactAttention(contact);if(!a.date)return '<span class="crm-pill">No reminder</span>';
  if(a.reason==="Birthday"&&a.days>=0&&a.days<=14)return `<span class="crm-pill upcoming">Birthday ${a.days===0?"today":`in ${a.days}d`}</span>`;
  if(a.days<0)return `<span class="crm-pill overdue">${Math.abs(a.days)}d overdue</span>`;
  if(a.days===0)return '<span class="crm-pill today">Due today</span>';
  return `<span class="crm-pill upcoming">In ${a.days}d</span>`;
}
function contactFirstName(contact){return String(contact.name||"there").trim().split(/\s+/)[0]||"there";}
function contactMessage(contact){
  const templates=crmState().message_templates||MASTER_SEED.crm.message_templates||{};const first=contactFirstName(contact);const birthday=nextBirthdayKey(contact);
  let template=(birthday===localDateKey()?templates.birthday:(contact.last_topic?templates.follow_up:templates.check_in))||"Hey {first}, just checking in. How have you been?";
  return template.replaceAll("{first}",first).replaceAll("{topic}",contact.last_topic||"what we talked about");
}
function crmAttentionList(){
  const windowDays=Number(crmState().outreach_window_days||7);
  return activeCrmContacts().map(contact=>({contact,attention:contactAttention(contact)})).filter(x=>x.attention.date&&x.attention.days<=windowDays).sort((a,b)=>a.attention.date.localeCompare(b.attention.date)||a.contact.name.localeCompare(b.contact.name));
}
function renderRelationshipNudge(){
  const target=$("relationshipNudge");if(!target)return;const items=crmAttentionList().slice(0,3);
  if(!activeCrmContacts().length){target.innerHTML='<div class="crm-empty">Add the people you want Dawn View to help you stay connected with.</div>';return;}
  if(!items.length){target.innerHTML='<div class="crm-empty">Nobody needs a check-in this week. Your relationship queue is clear.</div>';return;}
  target.innerHTML=`<div class="relationship-nudge">${items.map(({contact,attention})=>`<div class="row compact-row"><div><strong>${escapeHtml(contact.name)}</strong><br><small>${attention.reason}${attention.days<0?` • ${Math.abs(attention.days)}d overdue`:attention.days===0?" • today":` • in ${attention.days}d`}</small></div>${contactStatusLabel(contact)}</div>`).join("")}</div>`;
}
function crmContactMarkup(contact,queue=false){
  const last=contact.last_contact?`${Math.max(0,daysBetweenKeys(contact.last_contact,localDateKey()))}d ago`:"Not logged yet";
  const cadence=Number(contact.cadence_days||0)?`Every ${Number(contact.cadence_days)}d`:"No cadence";
  const phone=String(contact.phone||"").trim();const cls=queue?"crm-queue-item":"crm-contact";
  return `<div class="${cls}"><div class="${queue?"crm-queue-head":"crm-contact-head"}"><div><strong>${escapeHtml(contact.name)}</strong><div class="crm-contact-meta"><span class="crm-pill">${escapeHtml(contact.category||"Friend")}</span>${contact.relationship?`<span class="crm-pill">${escapeHtml(contact.relationship)}</span>`:""}<span class="crm-pill">${escapeHtml(cadence)}</span><span class="crm-pill">Last: ${escapeHtml(last)}</span></div></div>${contactStatusLabel(contact)}</div>${contact.last_topic?`<p class="crm-note"><strong>Last topic:</strong> ${escapeHtml(contact.last_topic)}</p>`:""}${contact.notes?`<p class="crm-note">${escapeHtml(contact.notes)}</p>`:""}<div class="crm-actions">${phone?`<button data-crm-text="${escapeHtml(contact.id)}">Text</button><button data-crm-call="${escapeHtml(contact.id)}" class="secondary">Call</button>`:""}<button data-crm-log="${escapeHtml(contact.id)}" class="secondary">✓ Log touch</button><button data-crm-snooze="${escapeHtml(contact.id)}" class="secondary">+7d</button><button data-crm-edit="${escapeHtml(contact.id)}" class="secondary">Edit</button>${queue?"":`<button data-crm-archive="${escapeHtml(contact.id)}" class="secondary">Pause</button>`}</div></div>`;
}
function renderCRM(){
  const target=$("crmList");if(!target)return;const contacts=activeCrmContacts();const queue=crmAttentionList();const today=localDateKey();
  const overdue=contacts.filter(x=>contactAttention(x).days<0).length,dueToday=contacts.filter(x=>contactAttention(x).days===0).length,birthdays=contacts.filter(x=>{const d=nextBirthdayKey(x);return d&&daysBetweenKeys(today,d)>=0&&daysBetweenKeys(today,d)<=30;}).length;
  $("crmMetrics").innerHTML=[["People",contacts.length],["Overdue",overdue],["Due today",dueToday],["Birthdays • 30d",birthdays]].map(([label,value])=>`<div class="metric"><small>${label}</small><strong>${value}</strong></div>`).join("");
  $("crmQueue").innerHTML=queue.length?queue.map(x=>crmContactMarkup(x.contact,true)).join(""):'<div class="crm-empty">Your outreach queue is clear for the next 7 days.</div>';
  const query=String($("crmSearch")?.value||"").trim().toLowerCase(),category=$("crmCategoryFilter")?.value||"";
  const filtered=contacts.filter(x=>(!category||x.category===category)&&(!query||[x.name,x.relationship,x.category,x.notes,x.last_topic].some(v=>String(v||"").toLowerCase().includes(query)))).sort((a,b)=>contactAttention(a).date.localeCompare(contactAttention(b).date)||a.name.localeCompare(b.name));
  target.innerHTML=filtered.length?filtered.map(x=>crmContactMarkup(x,false)).join(""):'<div class="crm-empty">No contacts match this filter.</div>';
  bindCRM();
}
function crmContact(id){return crmState().contacts.find(x=>x.id===id);}
function openRelationshipText(id){const x=crmContact(id);if(!x||!x.phone)return;const message=contactMessage(x);if(window.AndroidRelationships?.text){window.AndroidRelationships.text(String(x.phone),message);return;}window.location.href=`sms:${encodeURIComponent(x.phone)}?body=${encodeURIComponent(message)}`;}
function openRelationshipCall(id){const x=crmContact(id);if(!x||!x.phone)return;if(window.AndroidRelationships?.call){window.AndroidRelationships.call(String(x.phone));return;}window.location.href=`tel:${encodeURIComponent(x.phone)}`;}
async function logRelationshipTouch(id){const x=crmContact(id);if(!x)return;x.last_contact=localDateKey();x.next_followup=Number(x.cadence_days||0)>0?addDaysKey(x.last_contact,Number(x.cadence_days)):"";await persist();renderCRM();renderRelationshipNudge();}
async function snoozeRelationship(id){const x=crmContact(id);if(!x)return;x.next_followup=addDaysKey(localDateKey(),7);await persist();renderCRM();renderRelationshipNudge();}
async function archiveRelationship(id){const x=crmContact(id);if(!x||!confirm(`Pause reminders for ${x.name}?`))return;x.active=false;await persist();renderCRM();renderRelationshipNudge();}
async function importFamilyToCRM(){
  const family=(state.family_seed||[]).filter(x=>String(x.relationship||"").toLowerCase()!=="self");let added=0;
  for(const person of family){if(crmState().contacts.some(x=>String(x.name).toLowerCase()===String(person.name).toLowerCase()))continue;crmState().contacts.push({id:uid("contact"),name:person.name,relationship:person.relationship||"Family",category:"Immediate Family",phone:"",birthday:person.birthday||"",preferred_channel:"Either",cadence_days:7,last_contact:"",next_followup:localDateKey(),last_topic:"",notes:"Imported from Family Tree",active:true});added++;}
  await persist();renderCRM();renderRelationshipNudge();alert(added?`${added} family member${added===1?"":"s"} added to Com.`:"Everyone in the Family Tree is already in Com.");
}
function bindCRM(){
  document.querySelectorAll("[data-crm-text]").forEach(b=>b.onclick=()=>openRelationshipText(b.dataset.crmText));
  document.querySelectorAll("[data-crm-call]").forEach(b=>b.onclick=()=>openRelationshipCall(b.dataset.crmCall));
  document.querySelectorAll("[data-crm-log]").forEach(b=>b.onclick=()=>logRelationshipTouch(b.dataset.crmLog));
  document.querySelectorAll("[data-crm-snooze]").forEach(b=>b.onclick=()=>snoozeRelationship(b.dataset.crmSnooze));
  document.querySelectorAll("[data-crm-edit]").forEach(b=>b.onclick=()=>openEditor("contact",b.dataset.crmEdit));
  document.querySelectorAll("[data-crm-archive]").forEach(b=>b.onclick=()=>archiveRelationship(b.dataset.crmArchive));
}

function renderBankSync(){
  const badge=$("bankSyncBadge");
  if(badge){badge.className="sync-badge setup";badge.textContent="Coming Soon";}
  const summary=$("bankSyncSummary");
  if(summary)summary.innerHTML='<div class="bank-sync-details"><div class="bank-sync-line"><span>Status</span><strong>Not included in this preview</strong></div><div class="bank-sync-line"><span>Planned</span><strong>Optional bank sync</strong></div></div>';
  const linked=$("linkedBankAccounts");
  if(linked)linked.innerHTML='<p class="muted">This shareable web build uses manual balances only. Secure bank sync is a possible future feature.</p>';
  ["bankSyncSetup","bankSyncConnect","bankSyncRefresh","bankPrivacy"].forEach(id=>{const el=$(id);if(el)el.disabled=true;});
}

function renderFinanceAccountTotals(activeAccounts=active(accounts())){
  const target=$("financeAccountTotals");if(!target)return;
  const floor=Number(finance().daily_spending_floor||0);
  target.innerHTML=activeAccounts.map(x=>{
    const balance=Number(x.balance||0),delta=balance-floor;
    const floorNote=x.id==="daily"?`<span class="account-floor-note ${delta<0?"below":"above"}">Floor ${money(floor)} • ${delta>=0?`${money(delta)} above`:`${money(Math.abs(delta))} below`}</span>`:"";
    return `<div class="metric account-total-card" data-account-card="${escapeHtml(x.id)}"><small>${escapeHtml(x.name)}</small><div class="account-total-read"><div><strong>${money(x.balance)}</strong>${floorNote}</div><button class="secondary compact" data-account-quick-edit="${escapeHtml(x.id)}">Edit</button></div><div class="account-total-editor hidden"><label class="sr-only" for="account-total-${escapeHtml(x.id)}">${escapeHtml(x.name)} balance</label><input id="account-total-${escapeHtml(x.id)}" data-account-balance-input="${escapeHtml(x.id)}" type="number" step="0.01" value="${Number(x.balance||0).toFixed(2)}"><div class="account-total-editor-actions"><button data-account-quick-save="${escapeHtml(x.id)}" class="compact">Save</button><button data-account-quick-cancel="${escapeHtml(x.id)}" class="secondary compact">Cancel</button></div></div></div>`;
  }).join("");
  document.querySelectorAll("[data-account-quick-edit]").forEach(b=>b.onclick=()=>{
    const card=b.closest(".account-total-card");if(!card)return;
    card.querySelector(".account-total-read")?.classList.add("hidden");
    card.querySelector(".account-total-editor")?.classList.remove("hidden");
    const input=card.querySelector("[data-account-balance-input]");input?.focus();input?.select();
  });
  document.querySelectorAll("[data-account-quick-cancel]").forEach(b=>b.onclick=()=>renderFinanceAccountTotals(active(accounts())));
  document.querySelectorAll("[data-account-quick-save]").forEach(b=>b.onclick=async()=>{
    const id=b.dataset.accountQuickSave,input=document.querySelector(`[data-account-balance-input="${CSS.escape(id)}"]`),item=account(id);
    if(!item||!input)return;
    const value=Number(input.value);
    if(!Number.isFinite(value)){alert("Enter a valid account balance.");return;}
    item.balance=Math.round(value*100)/100;
    await persist();renderAll();
  });
}

function resetSinkingAllocationForm(){
  editingSinkingAllocationId=null;
  if($("sinkingAllocationName"))$("sinkingAllocationName").value="";
  if($("sinkingAllocationAmount"))$("sinkingAllocationAmount").value="";
  if($("sinkingAllocationNotes"))$("sinkingAllocationNotes").value="";
  if($("sinkingAllocationSave"))$("sinkingAllocationSave").textContent="Add allocation";
  if($("sinkingAllocationCancel"))$("sinkingAllocationCancel").classList.add("hidden");
}
function renderSinkingAllocations(){
  const list=$("sinkingAllocationList"),summary=$("sinkingAllocationSummary");if(!list||!summary)return;
  const floorInput=$("dailySpendingFloor"),floorSave=$("dailySpendingFloorSave");
  if(floorInput)floorInput.value=Number(finance().daily_spending_floor||0).toFixed(2);
  if(floorSave)floorSave.onclick=async()=>{
    const value=Number(floorInput?.value||0);
    if(!Number.isFinite(value)||value<0){alert("Enter a valid Daily Spending floor.");return;}
    finance().daily_spending_floor=Math.round(value*100)/100;
    await persist();renderAll();
  };
  const total=sinkingBalance(),allocated=sinkingAllocated(),unallocated=Math.max(0,total-allocated),over=Math.max(0,allocated-total);
  summary.innerHTML=`<span><small>Total sinking</small><strong>${money(total)}</strong></span><span><small>Allocated</small><strong>${money(allocated)}</strong></span><span><small>Unallocated</small><strong>${money(unallocated)}</strong></span>`;
  const items=sinkingAllocations();
  list.innerHTML=items.length?items.map(x=>`<div class="sinking-allocation-row"><div><strong>${escapeHtml(x.name||"Allocation")}</strong><small>${money(x.amount)}</small>${x.notes?`<p>${escapeHtml(x.notes)}</p>`:""}</div><div class="sinking-allocation-actions"><button data-sinking-edit="${x.id}" class="secondary compact">Edit</button><button data-sinking-delete="${x.id}" class="danger compact">Delete</button></div></div>`).join(""):'<p class="muted">No sinking money is allocated yet. Unallocated sinking remains flexible.</p>';
  $("sinkingAllocationWarning").innerHTML=over>0?`<div class="alert bad"><strong>Overallocated by ${money(over)}</strong><br>Allocations exceed the current Sinking balance. Flexible sinking is $0.00 until the balance catches up or allocations are reduced.</div>`:"";
  document.querySelectorAll("[data-sinking-edit]").forEach(b=>b.onclick=()=>{const x=sinkingAllocations().find(a=>a.id===b.dataset.sinkingEdit);if(!x)return;editingSinkingAllocationId=x.id;$("sinkingAllocationName").value=x.name||"";$("sinkingAllocationAmount").value=Number(x.amount||0);$("sinkingAllocationNotes").value=x.notes||"";$("sinkingAllocationSave").textContent="Update allocation";$("sinkingAllocationCancel").classList.remove("hidden");$("sinkingAllocationName").focus();});
  document.querySelectorAll("[data-sinking-delete]").forEach(b=>b.onclick=async()=>{const x=sinkingAllocations().find(a=>a.id===b.dataset.sinkingDelete);if(!x||!confirm(`Delete ${x.name||"this allocation"}?`))return;finance().sinking_allocations=sinkingAllocations().filter(a=>a.id!==x.id);if(editingSinkingAllocationId===x.id)resetSinkingAllocationForm();await persist();renderAll();});
  $("sinkingAllocationSave").onclick=async()=>{const name=$("sinkingAllocationName").value.trim(),amount=Number($("sinkingAllocationAmount").value||0),notes=$("sinkingAllocationNotes").value.trim();if(!name){alert("Add an allocation name.");return;}if(!Number.isFinite(amount)||amount<0){alert("Enter a valid allocation amount.");return;}const arr=sinkingAllocations();if(editingSinkingAllocationId){const x=arr.find(a=>a.id===editingSinkingAllocationId);if(x)Object.assign(x,{name,amount,notes});}else arr.push({id:uid("sink"),name,amount,notes});resetSinkingAllocationForm();await persist();renderAll();};
  $("sinkingAllocationCancel").onclick=()=>resetSinkingAllocationForm();
}
function renderFinance(){
  renderBankSync();
  const activeAccounts=active(accounts());
  const current=state.tracking.current_date||new Date().toISOString().slice(0,10);
  const nextPayday=nextPaydayAfter(current);
  const monthKey=current.slice(0,7);
  const monthInstances=(state.tracking.bill_instances||[]).filter(x=>x.month===monthKey&&x.status!=="paid"&&x.status!=="skipped");
  const remainingMonthBills=monthInstances.length?monthInstances.reduce((sum,x)=>sum+unpaid(x),0):billTotal();
  const periodBills=nextPayday?monthInstances.filter(x=>dueDate(x)<nextPayday):[];
  const periodDue=periodBills.reduce((sum,x)=>sum+unpaid(x),0);
  const billCash=billsBalance();
  const neededBeforePayday=Math.max(0,periodDue-billCash);
  const paydayLabel=nextPayday||"not set";
  renderFinanceAccountTotals(activeAccounts);
  renderSinkingAllocations();
  $("financeAlerts").innerHTML=(overLimit().length?`<div class="alert bad"><strong>${overLimit().length} card(s) over limit.</strong></div>`:"")+`<div class="alert ${neededBeforePayday===0?"ok":"bad"}"><strong>${neededBeforePayday===0?"Bills covered until next payday":"Money needed before next payday"}</strong><br>${nextPayday?(neededBeforePayday===0?`${money(billCash-periodDue)} remains in the Bills account after bills due before ${nextPayday}.`:`Add ${money(neededBeforePayday)} to the Bills account before ${nextPayday}.`):"Add a future payday to calculate this amount."}</div>`;
  $("financeMetrics").innerHTML=[
    ["Bills account",money(billCash)],["Bills due before next payday",money(periodDue)],
    ["Need before next payday",money(neededBeforePayday)],["Bills left this month",money(remainingMonthBills)]
  ].map(x=>`<div class="metric"><small>${x[0]}</small><strong>${x[1]}</strong></div>`).join("");
  const prioritized=periodBills.slice().sort((a,b)=>dueDate(a).localeCompare(dueDate(b)));
  const fundedDue=prioritized.filter(x=>x.status==="funded").reduce((sum,x)=>sum+unpaid(x),0);
  const unfundedDue=prioritized.filter(x=>x.status!=="funded").reduce((sum,x)=>sum+unpaid(x),0);
  $("financeBills").innerHTML=(nextPayday?`<div class="period-summary ${neededBeforePayday===0?"ok":"bad"}"><small>Priority window · ${current} → ${nextPayday}</small><strong>${money(periodDue)} total to pay</strong><span>${money(unfundedDue)} marked unfunded · ${money(fundedDue)} marked funded</span><span>${neededBeforePayday===0?"Covered by the Bills account.":`${money(neededBeforePayday)} still needed in the Bills account.`}</span></div>`:"")+prioritized.map(x=>`<div class="row compact-row"><div><strong>${x.name}</strong><br><small>Due ${dueDate(x)} • Pay before ${paydayLabel}</small><br>${billStatusLabel(x)}</div><strong>${money(unpaid(x))}</strong></div>`).join("")+(prioritized.length?"":'<p class="muted">No unpaid bills are due before the next payday.</p>');
  $("financeDebts").innerHTML=active(debts()).slice().sort((a,b)=>Number(b.apr)-Number(a.apr)).map(x=>`<div class="row"><div><strong>${x.name}</strong><br><small>${x.apr}% APR</small></div><strong>${money(x.balance)}</strong></div>`).join("");
}
function renderPlanner(){
  const e=state.income_estimator,p=finance().planning;
  $("uagcRate").value=e.uagc_rate||0;$("uagcHours").value=e.uagc_hours||0;$("uagcWithholding").value=e.uagc_withholding_percent||0;$("uagcPayday").value=e.uagc_next_payday||"";
  $("securityRate").value=e.security_net_hourly_rate||0;$("securityHours").value=e.security_hours_this_week||0;$("securityOvertimeEnabled").checked=!!e.security_overtime_enabled;$("securityOvertimeHours").value=e.security_overtime_hours||0;$("securityOvertimeMultiplier").value=e.security_overtime_multiplier||1.5;$("securityPayday").value=e.security_next_payday||"";$("securityNotes").value=e.security_notes||"";toggleOvertimeFields();
  displayPlanner(plannerCalc());
}
function displayPlanner(c){
  $("plannerMetrics").innerHTML=[["Primary Job estimate",money(c.uagcNet)],["Side Work estimate",money(c.securityNet)],["Combined estimate",money(c.total)],["Next side-work payday",c.v.security_payday||"Not set"],["Next Primary Job payday",c.v.uagc_payday||"Not set"]].map(x=>`<div class="metric"><small>${x[0]}</small><strong>${x[1]}</strong></div>`).join("");
  const rows=[];
  if(c.v.security_payday) rows.push(`<div class="paycheck"><div class="payday">Tue</div><div><strong>Side Work</strong><br><small>${c.v.security_payday} • ${c.v.security_hours} regular${c.v.security_overtime_enabled?` + ${c.v.security_overtime_hours} OT @ ${money(c.securityOvertimeRate)}/hr`:""}</small></div><strong>${money(c.securityNet)}</strong></div>`);
  if(c.v.uagc_payday) rows.push(`<div class="paycheck"><div class="payday">Wed</div><div><strong>Primary Job</strong><br><small>${c.v.uagc_payday} • ${c.v.uagc_hours} hours</small></div><strong>${money(c.uagcNet)}</strong></div>`);
  $("incomingPaychecks").innerHTML=rows.join("")||'<p class="muted">Add pay dates.</p>';
}
async function savePlannerDefaults(){
  const v=plannerValues(),e=state.income_estimator,p=finance().planning;
  Object.assign(e,{uagc_rate:v.uagc_rate,uagc_hours:v.uagc_hours,uagc_withholding_percent:v.uagc_withholding,uagc_next_payday:v.uagc_payday,security_net_hourly_rate:v.security_rate,security_hours_this_week:v.security_hours,security_overtime_enabled:v.security_overtime_enabled,security_overtime_hours:v.security_overtime_hours,security_overtime_multiplier:v.security_overtime_multiplier,security_next_payday:v.security_payday,security_notes:v.security_notes});
  p.next_paycheck_amount=plannerCalc(v).total;
  await persist();renderAll();
}
async function createExpectedPaychecks(){
  const c=plannerCalc(),v=c.v,records=state.tracking.paycheck_records||[];
  const upsert=(source,date,estimate)=>{
    if(!date)return;
    const existing=records.find(x=>x.source===source&&x.pay_date===date);
    if(existing){existing.estimated_net=estimate;if(!existing.actual_net)existing.status="expected";}
    else records.push({id:uid("pay"),source,pay_date:date,estimated_net:estimate,actual_net:0,status:"expected",notes:"Created from planner"});
  };
  upsert("Side Work",v.security_payday,c.securityNet);upsert("Primary Job",v.uagc_payday,c.uagcNet);
  state.tracking.paycheck_records=records;
  state.tracking.next_payday=[v.security_payday,v.uagc_payday].filter(Boolean).sort()[0]||"";
  await savePlannerDefaults();alert("Expected paychecks created.");
}
function paycheckValue(x){ return x.status==="received"?Number(x.actual_net||0):0; }
function projectedPaycheckValue(x){ return x.status==="received"?Number(x.actual_net||0):Number(x.estimated_net||0); }
function upcomingPaydaysAfter(date){
  return (state.tracking.paycheck_records||[]).filter(x=>x.pay_date>date).sort((a,b)=>a.pay_date.localeCompare(b.pay_date));
}
function nextPaydayAfter(date){ return upcomingPaydaysAfter(date)[0]?.pay_date||state.tracking.next_payday||""; }
function coverageText(amount){ return amount>=0?`Bills covered — ${money(amount)} remaining`:`Short by ${money(Math.abs(amount))}`; }
function renderTracking(){
  const current=state.tracking.current_date||new Date().toISOString().slice(0,10);
  const nextPayday=nextPaydayAfter(current);
  state.tracking.next_payday=nextPayday;
  $("trackingMonth").value=selectedMonth();$("trackingDate").value=current;$("trackingNextPayday").value=nextPayday;
  const records=monthRecords();
  const periodBills=nextPayday?records.filter(x=>dueDate(x)<nextPayday):[];
  const periodDue=periodBills.reduce((sum,x)=>sum+unpaid(x),0);
  const monthDue=records.reduce((sum,x)=>sum+unpaid(x),0);
  const availableBillsCash=billsBalance();
  const periodRemaining=availableBillsCash-periodDue;
  const monthPaychecks=(state.tracking.paycheck_records||[]).filter(x=>x.pay_date?.startsWith(selectedMonth()));
  const projectedMonthIncome=monthPaychecks.filter(x=>x.pay_date>=current).reduce((s,x)=>s+projectedPaycheckValue(x),0);
  const totalMonthIncome=monthPaychecks.reduce((s,x)=>s+projectedPaycheckValue(x),0);
  const monthRemaining=availableBillsCash+projectedMonthIncome-monthDue;
  const paid=records.filter(x=>x.status==="paid").reduce((s,x)=>s+Number(x.actual_amount||x.expected_amount||0),0);
  const fundedPeriod=periodBills.filter(x=>x.status==="funded").reduce((sum,x)=>sum+unpaid(x),0);
  const received=(state.tracking.paycheck_records||[]).filter(x=>x.pay_date?.startsWith(selectedMonth())&&x.status==="received").reduce((s,x)=>s+Number(x.actual_net||0),0);
  $("trackingMetrics").innerHTML=[
    ["Bills account",money(availableBillsCash)],
    ["Bills left this month",money(monthDue)],
    periodRemaining>=0
      ? ["Remaining after bills",money(periodRemaining)]
      : ["Still needs funding",money(Math.abs(periodRemaining))],
    ["Income received this month",money(received)]
  ].map(x=>`<div class="metric"><small>${x[0]}</small><strong>${x[1]}</strong></div>`).join("");
  const periodSummary=nextPayday?`<div class="period-summary ${periodRemaining>=0?"ok":"bad"}"><small>Before next payday · ${current} → ${nextPayday}</small><strong>${money(periodDue)} still to pay</strong><span>${money(periodDue-fundedPeriod)} marked unfunded · ${money(fundedPeriod)} marked funded.<br>${coverageText(periodRemaining)} from the Bills account.</span></div>`:'<div class="period-summary bad"><span>Add a future payday to calculate bills due before payday.</span></div>';
  $("monthlyBills").innerHTML=periodSummary+records.sort((a,b)=>a.due_day-b.due_day).map(x=>{const inWindow=!!nextPayday&&dueDate(x)<nextPayday&&x.status!=="paid"&&x.status!=="skipped";const timingLabel=inWindow?'<span class="bill-state priority">Due before next payday</span>':'<span class="bill-state not-due">Not due before next payday</span>';return `<div class="row"><div><strong>${x.name}</strong><br><small>Due ${dueDate(x)} • ${money(x.expected_amount)}</small><br>${timingLabel}<br>${billStatusLabel(x)}</div><div class="row-actions bill-status-actions"><button data-status="funded" data-id="${x.id}" class="secondary status-action ${x.status==="funded"?"selected":""}">${x.status==="funded"?"✓ Funded":"Funded"}</button><button data-status="paid" data-id="${x.id}" class="secondary status-action ${x.status==="paid"?"selected":""}">${x.status==="paid"?"✓ Paid":"Paid"}</button><button data-status="partial" data-id="${x.id}" class="secondary status-action ${x.status==="partial"?"selected":""}">${x.status==="partial"?"✓ Partial":"Partial"}</button></div></div>`}).join("")||'<p class="muted">Create the month first.</p>';
  const pay=(state.tracking.paycheck_records||[]).filter(x=>x.pay_date?.startsWith(selectedMonth())).sort((a,b)=>a.pay_date.localeCompare(b.pay_date));
  $("paychecks").innerHTML=pay.map(x=>`<div class="row"><div><strong>${x.source}</strong><br><small>${x.pay_date} • ${x.status==="received"?`Actual ${money(x.actual_net)}`:`Projected ${money(x.estimated_net)}`} ${x.status==="received"&&Number(x.estimated_net)?`• Est. was ${money(x.estimated_net)}`:""}</small></div><div class="row-actions"><button data-pay="${x.id}" class="secondary">Edit</button><button data-delete-pay="${x.id}" class="danger">Delete</button></div></div>`).join("")||'<p class="muted">No paycheck records.</p>';
  const totals=source=>pay.filter(x=>x.source===source).reduce((a,x)=>({e:a.e+Number(x.estimated_net||0),a:a.a+Number(x.actual_net||0)}),{e:0,a:0});
  const varianceRow=(name,t)=>`<div class="row"><div><strong>${name}</strong><br><small>Estimated ${money(t.e)} • ${t.a?"Actual "+money(t.a):"Awaiting actual"}</small></div><strong>${t.a?money(Math.abs(t.a-t.e))+" "+(t.a>=t.e?"higher":"lower"):"Waiting"}</strong></div>`;
  const u=totals("Primary Job"),sec=totals("Side Work");$("variance").innerHTML=varianceRow("Primary Job",u)+varianceRow("Side Work",sec)+varianceRow("Combined",{e:u.e+sec.e,a:u.a+sec.a});
  document.querySelectorAll("[data-status]").forEach(b=>b.onclick=async()=>{
    const x=state.tracking.bill_instances.find(y=>y.id===b.dataset.id);if(!x)return;
    const requestedStatus=b.dataset.status;
    // Funded is a reversible planning marker. Tapping it again returns the bill to Unfunded.
    x.status=(requestedStatus==="funded" && x.status==="funded")?"upcoming":requestedStatus;
    if(x.status==="funded" || x.status==="upcoming"){
      // Funding never changes the bill amount and does not mean the bill was paid.
      x.actual_amount=0;x.paid_date="";
    }
    if(x.status==="paid"){
      x.actual_amount=Number(x.expected_amount||0);x.paid_date=state.tracking.current_date;
    }
    if(x.status==="partial"){
      const entered=prompt("Amount already paid:",x.actual_amount||0);if(entered===null)return;
      x.actual_amount=Math.min(Number(x.expected_amount||0),Math.max(0,Number(entered||0)));x.paid_date="";
    }
    await persist();renderAll();
  });
  document.querySelectorAll("[data-pay]").forEach(b=>b.onclick=async()=>{const x=state.tracking.paycheck_records.find(y=>y.id===b.dataset.pay);const entered=prompt("Actual deposit (leave blank to keep projected):",x.actual_net||"");if(entered===null)return;if(entered===""){x.actual_net=0;x.status="expected";}else{x.actual_net=Number(entered||0);x.status=x.actual_net>0?"received":"expected";}await persist();renderAll();});
  document.querySelectorAll("[data-delete-pay]").forEach(b=>b.onclick=async()=>{const x=state.tracking.paycheck_records.find(y=>y.id===b.dataset.deletePay);if(!x||!confirm(`Delete ${x.source} paycheck dated ${x.pay_date}?`))return;state.tracking.paycheck_records=state.tracking.paycheck_records.filter(y=>y.id!==x.id);await persist();renderAll();});
}
async function createMonth(){
  const month=$("trackingMonth").value||selectedMonth();state.tracking.selected_month=month;
  const existing=new Set((state.tracking.bill_instances||[]).filter(x=>x.month===month).map(x=>x.bill_id));
  for(const b of active(bills())) if(!existing.has(b.id)) state.tracking.bill_instances.push({id:uid("billinst"),month,bill_id:b.id,name:b.name,expected_amount:Number(b.amount||0),actual_amount:0,due_day:Number(b.due_day||1),status:"upcoming",paid_date:"",notes:""});
  await persist();renderAll();
}
function buttons(type,id,archive=true){return `<div class="row-actions"><button data-edit="${type}" data-id="${id}" class="secondary">Edit</button>${archive?`<button data-archive="${type}" data-id="${id}" class="secondary">Archive</button>`:""}<button data-delete="${type}" data-id="${id}" class="danger">Delete</button></div>`}
function collection(type){
  if(type==="account")return accounts();if(type==="bill")return bills();if(type==="debt")return debts();if(type==="expense")return state.major_expenses;if(type==="project")return state.projects;if(type==="contact")return state.crm.contacts;if(type==="knowledge")return state.knowledge.notes;
}
const specs={
 account:[["name","Name","text"],["balance","Balance","number"],["type","Type","select",["checking","savings","cash","other"]],["active","Active","checkbox"]],
 bill:[["name","Name","text"],["amount","Amount","number"],["due_day","Due day","number"],["category","Category","text"],["account_id","Payment account","account"],["autopay","Autopay","checkbox"],["active","Active","checkbox"]],
 debt:[["name","Name","text"],["balance","Balance","number"],["limit","Limit","number"],["apr","APR","number"],["minimum_payment","Minimum","number"],["type","Type","select",["credit_card","installment","collection","tax","other"]],["active","Active","checkbox"]],
 expense:[["name","Name","text"],["target_amount","Target","number"],["saved_amount","Saved","number"],["priority","Priority","select",["High","Medium","Low"]],["purpose","Purpose","text"]],
 project:[["name","Name","text"],["progress","Progress","number"],["next_action","Next action","text"],["status","Status","select",["Planned","In Progress","Paused","Complete"]]],
 contact:[["name","Name","text"],["relationship","Relationship","text"],["category","Group","select",["Immediate Family","Extended Family","Close Friend","Friend","Neighbor","Professional","Other"]],["phone","Phone","tel"],["birthday","Birthday","date"],["preferred_channel","Preferred outreach","select",["Either","Text","Call"]],["cadence_days","Check-in cadence (days)","number"],["last_contact","Last contact","date"],["last_topic","Last conversation / follow-up topic","textarea"],["notes","Things worth remembering","textarea"],["active","Active reminders","checkbox"]],
 knowledge:[["title","Title","text"],["category","Category","select",["Survival","Finance","Career","Health","Family","Technology","Ideas","Reference"]],["content","Content","text"]]
};
function openEditor(type,id=null){
  editType=type;editId=id;const arr=collection(type);const item=id===null?{}:(type==="expense"?arr[Number(id)]:arr.find(x=>x.id===id));$("editorTitle").textContent=(id===null?"Add ":"Edit ")+type;$("editorFields").innerHTML="";
  for(const [k,l,kind,opts] of specs[type]){
    const w=document.createElement("div");
    if(kind==="checkbox")w.innerHTML=`<label><input id="field-${k}" type="checkbox" style="width:auto" ${item?.[k]!==false?"checked":""}> ${l}</label>`;
    else if(kind==="select")w.innerHTML=`<label>${l}</label><select id="field-${k}">${opts.map(o=>`<option value="${o}" ${item?.[k]===o?"selected":""}>${o}</option>`).join("")}</select>`;
    else if(kind==="account")w.innerHTML=`<label>${l}</label><select id="field-${k}">${accounts().map(a=>`<option value="${a.id}" ${item?.[k]===a.id?"selected":""}>${a.name}</option>`).join("")}</select>`;
    else if(kind==="textarea")w.innerHTML=`<label>${l}</label><textarea id="field-${k}" rows="3">${escapeHtml(item?.[k]??"")}</textarea>`;
    else w.innerHTML=`<label>${l}</label><input id="field-${k}" type="${kind}" step=".01" value="${escapeHtml(item?.[k]??"")}">`;
    $("editorFields").appendChild(w);
  }
  $("editor").showModal();
}
async function saveEditor(){
  const arr=collection(editType),obj={};
  for(const [k,l,kind] of specs[editType]){const e=$("field-"+k);obj[k]=kind==="checkbox"?e.checked:kind==="number"?Number(e.value||0):e.value.trim();}
  if(editId===null){if(editType==="expense")arr.push(obj);else arr.push({id:uid(editType),...obj});}
  else if(editType==="expense")Object.assign(arr[Number(editId)],obj);else Object.assign(arr.find(x=>x.id===editId),obj);
  // Bill instances hold payment status, but recurring bills are the source of truth for due day/name/open amount.
  if(editType==="bill")syncBillInstancesWithRecurring();
  if(editType==="contact"){const contact=editId===null?arr[arr.length-1]:arr.find(x=>x.id===editId);if(contact){normalizeContact(contact);contact.next_followup=Number(contact.cadence_days||0)>0?(contact.last_contact?addDaysKey(contact.last_contact,contact.cadence_days):(contact.next_followup||localDateKey())):"";}}
  await persist();$("editor").close();renderAll();
}
function renderSurvival(){
  const notes=state.knowledge.survival_guides||[];
  $("survivalList").innerHTML=notes.map(x=>`<details class="survival-guide"><summary><strong>${escapeHtml(x.title)}</strong><small>${escapeHtml(x.priority||"Reference")}</small></summary><div class="survival-content">${(x.steps||[]).map(s=>`<p>• ${escapeHtml(s)}</p>`).join("")}${x.warning?`<div class="alert bad"><strong>Warning:</strong> ${escapeHtml(x.warning)}</div>`:""}</div></details>`).join("")||'<p class="muted">No survival guides loaded.</p>';
}
function toggleOvertimeFields(){
  const enabled=$("securityOvertimeEnabled")?.checked;
  $("securityOvertimeFields")?.classList.toggle("disabled-fields",!enabled);
  $("securityOvertimeHours").disabled=!enabled;
  $("securityOvertimeMultiplier").disabled=!enabled;
}
function renderManagers(){
  renderSurvival();
  const archivedSection=(type,items,label)=>items.length?`<details class="archived-list"><summary>${items.length} archived ${label}</summary>${items.map(x=>`<div class="row compact-row"><div><strong>${escapeHtml(x.name)}</strong></div><button data-restore="${type}" data-id="${x.id}" class="secondary compact">Restore</button></div>`).join("")}</details>`:"";
  $("accountsList").innerHTML=active(accounts()).map(x=>`<div class="row"><div><strong>${x.name}</strong><br><small>${money(x.balance)} • ${x.type}</small></div>${buttons("account",x.id)}</div>`).join("")+archivedSection("account",accounts().filter(x=>x.active===false),"accounts");
  $("billsList").innerHTML=active(bills()).sort((a,b)=>a.due_day-b.due_day).map(x=>`<div class="row"><div><strong>${x.name}</strong><br><small>${money(x.amount)} • Due ${x.due_day}</small></div>${buttons("bill",x.id)}</div>`).join("")+archivedSection("bill",bills().filter(x=>x.active===false),"bills");
  $("debtsList").innerHTML=active(debts()).map(x=>`<div class="row"><div><strong>${x.name}</strong><br><small>${money(x.balance)} • ${x.apr}% APR</small></div>${buttons("debt",x.id)}</div>`).join("")+archivedSection("debt",debts().filter(x=>x.active===false),"debts");
  $("expensesList").innerHTML=state.major_expenses.map((x,i)=>{const t=Number(x.target_amount||0),s=Number(x.saved_amount||0),p=t?Math.min(100,Math.round(s/t*100)):0;return `<div class="row"><div><strong>${x.name}</strong><br><small>${money(s)} / ${t?money(t):"TBD"} • ${p}%</small><div class="bar"><div class="fill" style="width:${p}%"></div></div></div>${buttons("expense",i,false)}</div>`}).join("");
  const projectActive=(state.projects||[]).filter(x=>x.active!==false),projectArchived=(state.projects||[]).filter(x=>x.active===false);
  $("projectsList").innerHTML=projectActive.map(x=>`<div class="row"><div><strong>${escapeHtml(x.name)}</strong><br><small>${escapeHtml(x.status||"Planned")} • ${Number(x.progress||0)}%</small><br><small>${escapeHtml(x.next_action||"")}</small><div class="bar"><div class="fill" style="width:${Math.max(0,Math.min(100,Number(x.progress||0)))}%"></div></div></div>${buttons("project",x.id,true)}</div>`).join("")+(projectArchived.length?`<details class="archived-list project-archive"><summary>${projectArchived.length} archived project${projectArchived.length===1?"":"s"} • still tracked in Life Status</summary>${projectArchived.map(x=>`<div class="row compact-row"><div><strong>${escapeHtml(x.name)}</strong><br><small>${escapeHtml(x.status||"Planned")} • ${Number(x.progress||0)}%</small></div><button data-restore="project" data-id="${x.id}" class="secondary compact">Restore</button></div>`).join("")}</details>`:"");
  $("knowledgeList").innerHTML=state.knowledge.notes.map(x=>`<div class="row"><div><strong>${x.title}</strong><br><small>${x.category}</small><p>${x.content}</p></div>${buttons("knowledge",x.id,false)}</div>`).join("")||'<p class="muted">No notes yet.</p>';
  bindCrud();
}
function bindCrud(){
  document.querySelectorAll("[data-edit]").forEach(b=>b.onclick=()=>openEditor(b.dataset.edit,b.dataset.id));
  document.querySelectorAll("[data-archive]").forEach(b=>b.onclick=async()=>{
    const type=b.dataset.archive,item=collection(type).find(x=>x.id===b.dataset.id);
    if(!item||!confirm(`Archive ${item.name}?`))return;
    item.active=false;
    if(type==="bill"){
      const today=new Date().toISOString().slice(0,10);
      state.tracking.bill_instances=(state.tracking.bill_instances||[]).filter(x=>x.bill_id!==item.id||x.status==="paid"||dueDate(x)<today);
    }
    b.classList.remove("secondary");
    b.classList.add("selected-action");
    b.textContent="✓ Archived";
    await new Promise(resolve=>setTimeout(resolve,240));
    await persist();renderAll();
  });
  document.querySelectorAll("[data-restore]").forEach(b=>b.onclick=async()=>{const item=collection(b.dataset.restore).find(x=>x.id===b.dataset.id);if(!item)return;item.active=true;await persist();renderAll();});
  document.querySelectorAll("[data-delete]").forEach(b=>b.onclick=async()=>{if(!confirm("Delete permanently?"))return;const arr=collection(b.dataset.delete);if(b.dataset.delete==="expense")arr.splice(Number(b.dataset.id),1);else{const i=arr.findIndex(x=>x.id===b.dataset.id);if(i>=0)arr.splice(i,1);}await persist();renderAll();});
}
function renderHealth(){
  $("healthWeight").value=state.health.weight??"";$("kneePain").value=state.health.knee_pain??"";$("exerciseMinutes").value=state.health.exercise_minutes||0;$("waterCups").value=state.health.water_cups||0;$("cpapUsed").checked=!!state.health.cpap_last_night;$("healthNote").value=state.health.status_note||"";
  const currentWeight=state.health.weight==null?"Not entered":`${state.health.weight} lb`;
  const goalWeight=state.health.weight_goal==null?"Not set":`${state.health.weight_goal} lb`;
  const remaining=(state.health.weight==null||state.health.weight_goal==null)?"—":`${Math.max(0,state.health.weight-state.health.weight_goal).toFixed(1)} lb`;
  $("healthSummary").innerHTML=`<div class="metrics"><div class="metric"><small>Current weight</small><strong>${currentWeight}</strong></div><div class="metric"><small>Goal weight</small><strong>${goalWeight}</strong></div><div class="metric"><small>To goal</small><strong>${remaining}</strong></div><div class="metric"><small>Pain / soreness</small><strong>${state.health.knee_pain??"Not entered"}</strong></div></div><p>Exercise today: ${state.health.exercise_minutes} minutes</p>`;
  renderTrainingHistories();
}
function renderCareer(){
  $("targetRole").value=state.career.target_role||"";$("salaryGoal").value=state.career.salary_goal||0;$("shrmProgress").value=state.career.shrm_progress||0;$("careerNext").value=state.career.next_action||"";
  $("careerSummary").innerHTML=`<p>Target: ${state.career.target_role}</p><p>Salary goal: ${money(state.career.salary_goal)}</p><p>Development progress: ${state.career.shrm_progress}%</p>`;
  $("courses").innerHTML=state.career.courses_completed.map(x=>`<div class="row"><div>${x}</div></div>`).join("");
}
function renderFamily(){
  state.family_seed=Array.isArray(state.family_seed)?state.family_seed:[];
  const person=id=>state.family_seed.find(x=>x.id===id),p=person(selectedPerson)||state.family_seed[0];
  if(!p){$("familyTree").innerHTML='<p class="muted">No family entries yet.</p>';return;}
  const rel=(label,ids)=>ids?.length?`<div><small>${label}</small><div>${ids.map(id=>`<button data-person="${id}" class="secondary">${person(id)?.name||id}</button>`).join(" ")}</div></div>`:"";
  $("familyTree").innerHTML=rel("Parents",p.parent_ids)+`<div class="card"><strong>${p.name}</strong><br><small>${p.relationship}</small></div>`+rel("Partners",p.partner_ids)+rel("Siblings",p.sibling_ids)+rel("Children",p.child_ids);
  document.querySelectorAll("[data-person]").forEach(b=>b.onclick=()=>{selectedPerson=b.dataset.person;renderFamily();});
}
function renderSimulator(){
  $("simGoal").innerHTML='<option value="">No goal</option>'+state.major_expenses.map((g,i)=>`<option value="${i}">${g.name}</option>`).join("");
  $("savedSimulations").innerHTML=(state.decision_simulator.saved_scenarios||[]).map(s=>`<div class="row"><div><strong>${s.name}</strong><br><small>${s.months} months • Impact ${money(s.cash_impact)}</small></div><button data-sim-delete="${s.id}" class="danger">Delete</button></div>`).join("")||'<p class="muted">No saved scenarios.</p>';
  document.querySelectorAll("[data-sim-delete]").forEach(b=>b.onclick=async()=>{state.decision_simulator.saved_scenarios=state.decision_simulator.saved_scenarios.filter(x=>x.id!==b.dataset.simDelete);await persist();renderSimulator();});
}
function simulate(){
  const one=Number($("simOneTime").value||0),monthly=Number($("simMonthly").value||0),weekly=Number($("simWeekly").value||0),months=Math.max(1,Number($("simMonths").value||1));
  const current=monthEnd(),next=current-one-monthly+weekly*4.33,impact=(weekly*4.33-monthly)*months-one;
  $("simMetrics").innerHTML=[["Current month-end",money(current)],["Simulated month-end",money(next)],["Modeled impact",money(impact)]].map(x=>`<div class="metric"><small>${x[0]}</small><strong>${x[1]}</strong></div>`).join("");
  $("simRecommendation").innerHTML=`<div class="alert ${next<0?"bad":impact<0?"":"ok"}"><strong>${next<0?"High risk":impact<0?"Manageable but costly":"Financially workable"}</strong></div>`;
  return {id:uid("sim"),name:$("simName").value||"Unnamed decision",one_time_cost:one,monthly_cost:monthly,extra_weekly_income:weekly,months,cash_impact:impact,simulated_month_end:next,notes:$("simNotes").value||""};
}

function trainingState(){
  state.training=state.training||clone(MASTER_SEED.training);
  state.training.logs=state.training.logs||{};
  return state.training;
}
function localDateKey(date=new Date()){
  const y=date.getFullYear(),m=String(date.getMonth()+1).padStart(2,"0"),d=String(date.getDate()).padStart(2,"0");
  return `${y}-${m}-${d}`;
}
function todayName(){return new Intl.DateTimeFormat("en-US",{weekday:"long"}).format(new Date());}
function escapeHtml(value){return String(value??"").replace(/[&<>'"]/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[ch]));}
function dayLog(){
  const t=trainingState(),key=localDateKey();
  t.logs[key]=t.logs[key]||{schedule:{},exercises:{},alternativeExercises:{},scheduleConflict:false,conflictNotes:""};
  t.logs[key].exercises=t.logs[key].exercises||{};t.logs[key].alternativeExercises=t.logs[key].alternativeExercises||{};
  return t.logs[key];
}
function ensureScheduleIds(){
  const t=trainingState();
  Object.keys(t.schedule||{}).forEach(day=>{
    (t.schedule[day]||[]).forEach(item=>{if(!item.id)item.id=uid("block");});
  });
}
function scheduleDone(log,item,index){
  return !!(log.schedule[item.id] ?? log.schedule[index]);
}
function themeState(){
  const key="dawnview_theme";
  const stored=localStorage.getItem(key)||"neon";
  return ["neon","slate","obsidian"].includes(stored)?stored:"neon";
}
function applyTheme(theme=themeState()){
  const clean=["neon","slate","obsidian"].includes(theme)?theme:"neon";
  document.documentElement.dataset.theme=clean;
  localStorage.setItem("dawnview_theme",clean);
  const subtitle=$("themeSubtitle");
  const subtitles={neon:"SYSTEM ONLINE • CYBER-NOIR INTERFACE",slate:"SYSTEM ONLINE • SLATE PURPLE INTERFACE",obsidian:"SYSTEM ONLINE • OBSIDIAN SIGNAL INTERFACE"};
  if(subtitle)subtitle.textContent=subtitles[clean];
  document.querySelectorAll("[data-theme-choice]").forEach(b=>b.classList.toggle("active",b.dataset.themeChoice===clean));
  const themeMeta=document.querySelector('meta[name="theme-color"]');
  const themeColors={neon:"#05010a",slate:"#141218",obsidian:"#111113"};
  if(themeMeta)themeMeta.setAttribute("content",themeColors[clean]);
}
function calendarState(){
  state.integrations=state.integrations||{};
  state.integrations.google_calendar=state.integrations.google_calendar||{events:[],last_sync:null,status:"not_synced",message:"",days_ahead:14};
  const c=state.integrations.google_calendar;if(!Array.isArray(c.events))c.events=[];if(![7,14,30].includes(Number(c.days_ahead)))c.days_ahead=14;return c;
}
function calendarEventDateKey(event){
  const start=new Date(Number(event?.startMs||0));
  if(event?.allDay){
    // Android CalendarContract represents all-day instance times at UTC midnight.
    // Using the phone's local timezone can shift a Wednesday event onto Tuesday.
    const y=start.getUTCFullYear(),m=String(start.getUTCMonth()+1).padStart(2,"0"),d=String(start.getUTCDate()).padStart(2,"0");
    return `${y}-${m}-${d}`;
  }
  return localDateKey(start);
}
function googleEventsForDate(dateKey){return calendarState().events.filter(e=>calendarEventDateKey(e)===dateKey).sort((a,b)=>Number(a.startMs||0)-Number(b.startMs||0));}
function dateForWeekday(dayName){
  const names=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],now=new Date(),index=names.indexOf(dayName);
  const monday=new Date(now);monday.setHours(12,0,0,0);monday.setDate(now.getDate()-((now.getDay()+6)%7));
  monday.setDate(monday.getDate()+Math.max(0,index));return monday;
}
function formatCalendarTime(event){
  if(event.allDay)return "All day";
  const start=new Date(Number(event.startMs||0)),end=new Date(Number(event.endMs||0));
  const fmt=new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"2-digit"});
  return `${fmt.format(start)}–${fmt.format(end)}`;
}
function renderCalendarSettings(){
  const c=calendarState(),badge=$("calendarBadge");if(!badge)return;
  badge.className=`sync-badge ${c.status==="ready"?"ready":c.status==="error"?"error":"setup"}`;
  badge.textContent=c.status==="ready"?"Synced":c.status==="error"?"Needs attention":"Not synced";
  $("calendarEventCount").textContent=String(c.events.length);
  $("calendarLastSync").textContent=c.last_sync?new Date(c.last_sync).toLocaleString():"Never";
  $("calendarMessage").textContent=c.message||"";
  if($("calendarDaysAhead"))$("calendarDaysAhead").value=String(c.days_ahead||14);
}
const DawnCalendar={
  onCalendarResult(result){
    const c=calendarState();
    if(!result?.ok){c.status="error";c.message=result?.error||"Calendar sync failed";persist();renderCalendarSettings();return;}
    c.events=(Array.isArray(result.events)?result.events:[]).map(event=>({...event,dateKey:calendarEventDateKey(event)}));c.last_sync=new Date().toISOString();c.status="ready";
    c.message=c.events.length?`Loaded ${c.events.length} Google Calendar event${c.events.length===1?"":"s"}.`:(result.googleCalendarsFound===0?"No Google calendars are synced to this phone.":"No events found in the next 14 days.");
    persist();renderCalendarSettings();renderTrainingDashboard();
  }
};
window.DawnCalendar=DawnCalendar;
function syncGoogleCalendar(){
  const c=calendarState();
  if(!window.AndroidCalendar?.syncGoogleCalendar){c.status="error";c.message="Calendar sync is not active in this web preview.";renderCalendarSettings();return;}
  c.status="not_synced";c.message="Requesting calendar access…";renderCalendarSettings();
  window.AndroidCalendar.syncGoogleCalendar(Number(c.days_ahead||14));
}
async function clearGoogleCalendar(){const c=calendarState();c.events=[];c.last_sync=null;c.status="not_synced";c.message="Imported events cleared.";await persist();renderCalendarSettings();renderTrainingDashboard();}
function parseManualTime(value,dateKey){
  const m=String(value||"").trim().match(/^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)?$/i);if(!m)return Number.MAX_SAFE_INTEGER;
  let h=Number(m[1]),min=Number(m[2]||0),ampm=(m[3]||"").toUpperCase();if(ampm){if(h===12)h=0;if(ampm==="PM")h+=12;}
  const d=new Date(`${dateKey}T00:00:00`);d.setHours(h,min,0,0);return d.getTime();
}
function workoutModeForDay(day){
  const blocks=trainingState().schedule?.[day]||[];
  const workout=blocks.find(x=>/gym|home workout|rehab|home/i.test(`${x.type||""} ${x.title||""}`));
  if(!workout)return (trainingState().workouts?.[day]||[]).length?"Workout":"Recovery";
  if(/gym/i.test(`${workout.type} ${workout.title}`))return "Gym";
  if(/rehab/i.test(`${workout.type} ${workout.title}`))return "Rehab";
  return "Home";
}
function workoutSettingsDay(){return localStorage.getItem("dawnview_workout_settings_day")||todayName();}
function setWorkoutSettingsDay(day){localStorage.setItem("dawnview_workout_settings_day",day);renderWorkoutSettings();}
function exerciseSettingsRows(items,kind,day){
  return items.length?items.map((x,i)=>`<button class="workout-setting-row" data-workout-edit="${kind}" data-workout-index="${i}" data-workout-day="${day}"><span><strong>${escapeHtml(x.name)}</strong><small>${escapeHtml(x.target||"")}</small></span><span>›</span></button>`).join(""):'<p class="muted">No exercises. Add one when you want this day to be active.</p>';
}
function renderWorkoutSettings(){
  const tabs=$("workoutDayTabs");if(!tabs)return;const t=trainingState(),days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],day=workoutSettingsDay();
  tabs.innerHTML=days.map(d=>`<button class="secondary compact ${d===day?"active":""}" data-workout-day-select="${d}">${d.slice(0,3)}</button>`).join("");
  const block=(t.schedule?.[day]||[]).find(x=>/gym|home|rehab|workout/i.test(`${x.type||""} ${x.title||""}`));
  $("workoutSettingsSummary").innerHTML=`<div class="workout-day-summary"><span class="tag">${escapeHtml(workoutModeForDay(day))}</span><strong>${day}</strong><small>${block?`${escapeHtml(block.time)} • ${escapeHtml(block.title)}`:"No workout schedule block"}</small></div>`;
  $("primaryWorkoutSettings").innerHTML=exerciseSettingsRows(t.workouts?.[day]||[],"primary",day);
  $("alternativeWorkoutSettings").innerHTML=exerciseSettingsRows(t.alternative_workouts?.[day]||[],"alternative",day);
  document.querySelectorAll("[data-workout-day-select]").forEach(b=>b.onclick=()=>setWorkoutSettingsDay(b.dataset.workoutDaySelect));
  document.querySelectorAll("[data-workout-edit]").forEach(b=>b.onclick=()=>openWorkoutExerciseEditor(b.dataset.workoutDay,b.dataset.workoutEdit,Number(b.dataset.workoutIndex)));
}
function openWorkoutExerciseEditor(day=workoutSettingsDay(),kind="primary",index=null){
  const list=kind==="alternative"?(trainingState().alternative_workouts?.[day]||[]):(trainingState().workouts?.[day]||[]),item=index===null?null:list[index];
  $("workoutExerciseEditorTitle").textContent=item?"Edit Exercise":"Add Exercise";$("workoutExerciseDay").value=day;$("workoutExerciseKind").value=kind;$("workoutExerciseIndex").value=index===null?"":String(index);
  $("workoutExerciseName").value=item?.name||"";$("workoutExerciseTarget").value=item?.target||"";$("workoutExerciseDescription").value=item?.description||"";$("workoutExerciseMedia").value=item?.media||"";$("workoutExerciseMediaLabel").value=item?.mediaLabel||"";renderWorkoutMediaPreview(item?.media||"",item?.mediaLabel||"Form demo");$("deleteWorkoutExercise").classList.toggle("hidden",!item);$("workoutExerciseEditor").showModal();
}
async function saveWorkoutExercise(){
  const day=$("workoutExerciseDay").value,kind=$("workoutExerciseKind").value,index=$("workoutExerciseIndex").value,name=$("workoutExerciseName").value.trim();if(!name){alert("Enter an exercise name.");return;}
  const t=trainingState(),key=kind==="alternative"?"alternative_workouts":"workouts";t[key][day]=t[key][day]||[];const item={name,target:$("workoutExerciseTarget").value.trim(),description:$("workoutExerciseDescription").value.trim(),media:normalizeWorkoutMedia($("workoutExerciseMedia").value),mediaLabel:$("workoutExerciseMediaLabel").value.trim()};
  if(index==="")t[key][day].push(item);else t[key][day][Number(index)]=item;await persist();$("workoutExerciseEditor").close();renderWorkoutSettings();renderTrainingDashboard();
}
async function deleteWorkoutExercise(){
  const day=$("workoutExerciseDay").value,kind=$("workoutExerciseKind").value,index=$("workoutExerciseIndex").value;if(index==="")return;const t=trainingState(),key=kind==="alternative"?"alternative_workouts":"workouts";const item=t[key][day]?.[Number(index)];if(!confirm(`Delete “${item?.name||"exercise"}”?`))return;t[key][day].splice(Number(index),1);await persist();$("workoutExerciseEditor").close();renderWorkoutSettings();renderTrainingDashboard();
}
async function resetSelectedWorkoutDay(){
  const day=workoutSettingsDay();if(!confirm(`Restore ${day}'s primary and alternative workouts to the Dawn View defaults?`))return;const t=trainingState();t.workouts[day]=clone(MASTER_SEED.training.workouts[day]||[]);t.alternative_workouts[day]=clone(MASTER_SEED.training.alternative_workouts[day]||[]);await persist();renderWorkoutSettings();renderTrainingDashboard();
}
function renderTodayPlanSummary(){
  const target=$("todayPlanSummary");if(!target)return;const day=todayName(),events=googleEventsForDate(localDateKey()),now=Date.now(),next=events.find(e=>Number(e.endMs||e.startMs||0)>=now)||events[0];const mode=workoutModeForDay(day),workoutCount=(trainingState().workouts?.[day]||[]).length;
  const eventText=next?`${formatCalendarTime(next)} • ${escapeHtml(next.title||"Calendar event")}`:"No Google Calendar events remaining";
  target.innerHTML=`<div class="agenda-glance"><span class="tag training-mode-tag">${escapeHtml(day)} • ${escapeHtml(mode)}</span><span><strong>Next:</strong> ${eventText}</span><span><strong>Training:</strong> ${workoutCount?`${workoutCount} exercises planned`:"Recovery / no primary workout"}</span></div>`;
}
function renderWeeklySchedule(){
  const t=trainingState(),days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],today=todayName();
  $("weeklySchedule").innerHTML=days.map(day=>{
    const blocks=t.schedule?.[day]||[],dateKey=localDateKey(dateForWeekday(day)),google=googleEventsForDate(dateKey);
    const manual=blocks.map(item=>`<button class="week-block" data-week-edit="${escapeHtml(item.id)}" data-week-day="${day}"><small>${escapeHtml(item.time)}</small><span>${escapeHtml(item.title)}</span></button>`).join("");
    const imported=google.map(event=>`<div class="week-block google-event"><small>${escapeHtml(formatCalendarTime(event))}</small><span>${escapeHtml(event.title||"Calendar event")}</span><span class="tag google-tag">Google</span></div>`).join("");
    return `<div class="week-day ${day===today?"today-day":""}"><div class="week-day-heading"><strong>${day.slice(0,3)}</strong><span class="tag workout-mode-mini">${escapeHtml(workoutModeForDay(day))}</span>${day===today?'<span class="tag">Today</span>':""}</div>${manual||imported?manual+imported:'<small class="muted">Open</small>'}</div>`;
  }).join("");
  document.querySelectorAll("[data-week-edit]").forEach(b=>b.onclick=()=>openScheduleEditor(b.dataset.weekEdit,b.dataset.weekDay));
}
function renderTrainingHistory(targetId="trainingHistory"){
  const target=$(targetId);if(!target)return;
  const t=trainingState();
  const entries=Object.entries(t.logs||{}).filter(([,log])=>Object.values(log.exercises||{}).some(x=>x.done||x.sets||x.reps||x.pain!==undefined)||Object.values(log.alternativeExercises||{}).some(x=>x.done||x.sets||x.reps||x.pain!==undefined)||log.scheduleConflict||log.conflictNotes).sort((a,b)=>b[0].localeCompare(a[0])).slice(0,14);
  target.innerHTML=entries.length?entries.map(([date,log])=>{
    const parsed=new Date(`${date}T12:00:00`),day=new Intl.DateTimeFormat("en-US",{weekday:"long"}).format(parsed),workout=t.workouts?.[day]||[];
    const recorded=Object.entries(log.exercises||{}).filter(([,x])=>x.done||x.sets||x.reps||x.pain!==undefined);
    const alternatives=t.alternative_workouts?.[day]||[];
    const altRecorded=Object.entries(log.alternativeExercises||{}).filter(([,x])=>x.done||x.sets||x.reps||x.pain!==undefined);
    const done=[...recorded,...altRecorded].filter(([,x])=>x.done).length;
    const primaryDetails=recorded.map(([i,x])=>{const ex=workout[Number(i)];return `<div class="history-exercise"><strong>${escapeHtml(ex?.name||`Exercise ${Number(i)+1}`)}</strong><small>${x.sets?`${escapeHtml(x.sets)} sets`:""}${x.reps?` • ${escapeHtml(x.reps)} reps`:""}${x.pain!==undefined&&x.pain!==""?` • Pain ${escapeHtml(x.pain)}/10`:""}</small></div>`}).join("");
    const altDetails=altRecorded.map(([i,x])=>{const ex=alternatives[Number(i)];return `<div class="history-exercise"><strong>${escapeHtml(ex?.name||`Alternative ${Number(i)+1}`)} <span class="tag">Alternative</span></strong><small>${x.sets?`${escapeHtml(x.sets)} sets`:""}${x.reps?` • ${escapeHtml(x.reps)} reps`:""}${x.pain!==undefined&&x.pain!==""?` • Pain ${escapeHtml(x.pain)}/10`:""}</small></div>`}).join("");
    const conflict=log.scheduleConflict||log.conflictNotes?`<div class="alert"><strong>Schedule conflict</strong>${log.conflictNotes?`<br><small>${escapeHtml(log.conflictNotes)}</small>`:""}</div>`:"";
    return `<details class="history-entry"><summary><span><strong>${new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(parsed)} — ${day}</strong><small>${done} completed • ${recorded.length+altRecorded.length} logged</small></span></summary>${conflict}${primaryDetails}${altDetails}</details>`;
  }).join(""):'<p class="muted">No training history yet. Enter sets, reps, pain, or mark an exercise complete to create your first record.</p>';
}
function renderTrainingHistories(){
  renderTrainingHistory("healthTrainingHistory");
  renderTrainingHistory("todayTrainingHistory");
}
function normalizeWorkoutMedia(value){
  const v=String(value||"").trim();if(!v)return "";
  if(/^https:\/\//i.test(v))return v;
  if(/^media\/workouts\/[A-Za-z0-9._\/-]+$/i.test(v))return v;
  return "";
}
function workoutMediaIsImage(src){return /\.(?:gif|png|jpe?g|webp)(?:[?#].*)?$/i.test(src||"");}
function workoutMediaMarkup(exercise){
  const src=normalizeWorkoutMedia(exercise?.media);
  if(!src)return `<div class="exercise-demo empty"><span>▶</span><small>Demo not assigned</small></div>`;
  const label=escapeHtml(exercise?.mediaLabel||"Exercise demo"),safe=escapeHtml(src);
  const media=workoutMediaIsImage(src)?`<img src="${safe}" alt="${label}" loading="lazy" onerror="this.closest('figure').classList.add('media-error')">`:`<video src="${safe}" muted loop playsinline autoplay preload="metadata" aria-label="${label}" onerror="this.closest('figure').classList.add('media-error')"></video>`;
  return `<figure class="exercise-demo">${media}<figcaption>${label}</figcaption><div class="media-error-label">Demo unavailable</div></figure>`;
}
function renderWorkoutMediaPreview(src,label){
  const target=$("workoutMediaPreview");if(!target)return;const media=normalizeWorkoutMedia(src),caption=escapeHtml(label||"Form demo");
  if(!media){target.innerHTML='<div class="exercise-demo empty"><span>▶</span><small>No demo assigned yet</small></div>';return;}
  const safe=escapeHtml(media),asset=workoutMediaIsImage(media)?`<img src="${safe}" alt="${caption}">`:`<video src="${safe}" muted loop playsinline autoplay controls preload="metadata"></video>`;
  target.innerHTML=`<figure class="exercise-demo preview">${asset}<figcaption>${caption}</figcaption></figure>`;
}
function renderExerciseList(items,entries,prefix){
  return items.length?items.map((exercise,i)=>{
    const entry=entries[i]||{};
    return `<div class="exercise"><div class="exercise-layout"><div class="exercise-main"><div class="exercise-top"><div class="${entry.done?"completed-text":""}"><strong>${escapeHtml(exercise.name)}</strong><br><small>Target: ${escapeHtml(exercise.target)}</small></div><button class="check-button ${entry.done?"done":""}" data-${prefix}-check="${i}" aria-label="Toggle exercise">${entry.done?"✓":"○"}</button></div><div class="exercise-controls"><label>Sets<input type="number" min="0" inputmode="numeric" data-${prefix}-field="sets" data-${prefix}-index="${i}" value="${escapeHtml(entry.sets||"")}"></label><label>Reps<input type="text" inputmode="numeric" data-${prefix}-field="reps" data-${prefix}-index="${i}" value="${escapeHtml(entry.reps||"")}"></label><label>Pain 0–10<input type="number" min="0" max="10" inputmode="numeric" data-${prefix}-field="pain" data-${prefix}-index="${i}" value="${escapeHtml(entry.pain??"")}"></label></div><details><summary>How to do it</summary><p>${escapeHtml(exercise.description)}</p></details></div>${workoutMediaMarkup(exercise)}</div></div>`;
  }).join(""):'<p class="muted">No alternative is set for today.</p>';
}
function renderTrainingDashboard(){
  const t=trainingState(),day=todayName(),log=dayLog();
  ensureScheduleIds();
  renderWeeklySchedule();
  const schedule=t.schedule?.[day]||[];
  $("scheduleDateLabel").textContent=new Intl.DateTimeFormat("en-US",{weekday:"long",month:"short",day:"numeric"}).format(new Date()).toUpperCase();
  $("trainingDayLabel").textContent=day.toUpperCase();
  const googleToday=googleEventsForDate(localDateKey()),dateKey=localDateKey();
  const agenda=[...schedule.map((item,i)=>({kind:"manual",sort:parseManualTime(item.time,dateKey),item,i})),...googleToday.map(event=>({kind:"google",sort:Number(event.startMs||0),event}))].sort((a,b)=>a.sort-b.sort);
  $("todaySchedule").innerHTML=agenda.map(row=>{
    if(row.kind==="google"){const event=row.event;return `<div class="schedule-block calendar-event"><div class="schedule-time">${escapeHtml(formatCalendarTime(event))}</div><div><div class="schedule-title">${escapeHtml(event.title||"Calendar event")}</div><span class="tag google-tag">Google Calendar</span>${event.location?`<div class="schedule-notes">${escapeHtml(event.location)}</div>`:""}</div><div></div></div>`;}
    const item=row.item,done=scheduleDone(log,item,row.i),notes=item.notes?`<div class="schedule-notes">${escapeHtml(item.notes)}</div>`:"";
    return `<div class="schedule-block" data-schedule-edit="${escapeHtml(item.id)}" tabindex="0" role="button" aria-label="Edit ${escapeHtml(item.title)}"><div class="schedule-time">${escapeHtml(item.time)}</div><div class="${done?"completed-text":""}"><div class="schedule-title">${escapeHtml(item.title)}</div><span class="tag">${escapeHtml(item.type||"Other")}</span>${notes}</div><button class="check-button ${done?"done":""}" data-schedule-check="${escapeHtml(item.id)}" aria-label="Toggle schedule block">${done?"✓":"○"}</button></div>`;
  }).join("")||'<p class="muted">No blocks or calendar events scheduled today.</p>';
  renderTodayPlanSummary();
  const workout=t.workouts?.[day]||[];
  const completed=workout.filter((_,i)=>log.exercises[i]?.done).length;
  const percent=workout.length?Math.round(completed/workout.length*100):0;
  $("trainingProgress").innerHTML=`<div class="training-progress"><small>${completed} of ${workout.length} exercises complete</small><div class="bar"><div class="fill" style="width:${percent}%"></div></div></div>`;
  $("scheduleConflict").checked=!!log.scheduleConflict;
  $("scheduleConflictNotes").value=log.conflictNotes||"";
  $("todayTraining").innerHTML=workout.length?renderExerciseList(workout,log.exercises,"exercise"):'<p class="muted">Recovery day. Use the schedule block above.</p>';
  const alternatives=t.alternative_workouts?.[day]||[];
  $("alternativeTraining").innerHTML=renderExerciseList(alternatives,log.alternativeExercises,"alternative");
  document.querySelectorAll("[data-schedule-check]").forEach(b=>b.onclick=async e=>{e.stopPropagation();log.schedule[b.dataset.scheduleCheck]=!log.schedule[b.dataset.scheduleCheck];await persist();renderTrainingDashboard();});
  document.querySelectorAll("[data-schedule-edit]").forEach(el=>{
    el.onclick=()=>openScheduleEditor(el.dataset.scheduleEdit,day);
    el.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openScheduleEditor(el.dataset.scheduleEdit,day);}};
  });
  document.querySelectorAll("[data-exercise-check]").forEach(b=>b.onclick=async()=>{const i=b.dataset.exerciseCheck;log.exercises[i]=log.exercises[i]||{};log.exercises[i].done=!log.exercises[i].done;await persist();renderTrainingDashboard();});
  document.querySelectorAll("[data-exercise-field]").forEach(input=>input.onchange=async()=>{const i=input.dataset.exerciseIndex;log.exercises[i]=log.exercises[i]||{};log.exercises[i][input.dataset.exerciseField]=input.value;await persist();renderTrainingHistories();});
  document.querySelectorAll("[data-alternative-check]").forEach(b=>b.onclick=async()=>{const i=b.dataset.alternativeCheck;log.alternativeExercises[i]=log.alternativeExercises[i]||{};log.alternativeExercises[i].done=!log.alternativeExercises[i].done;await persist();renderTrainingDashboard();});
  document.querySelectorAll("[data-alternative-field]").forEach(input=>input.onchange=async()=>{const i=input.dataset.alternativeIndex;log.alternativeExercises[i]=log.alternativeExercises[i]||{};log.alternativeExercises[i][input.dataset.alternativeField]=input.value;await persist();renderTrainingHistories();});
  $("scheduleConflict").onchange=async()=>{log.scheduleConflict=$("scheduleConflict").checked;await persist();renderTrainingHistories();};
  $("scheduleConflictNotes").onchange=async()=>{log.conflictNotes=$("scheduleConflictNotes").value.trim();await persist();renderTrainingHistories();};
  renderTrainingHistories();
}
function findScheduleBlock(id,preferredDay){
  const t=trainingState();
  const days=preferredDay?[preferredDay,...Object.keys(t.schedule||{}).filter(d=>d!==preferredDay)]:Object.keys(t.schedule||{});
  for(const day of days){const index=(t.schedule[day]||[]).findIndex(x=>x.id===id);if(index>=0)return {day,index,item:t.schedule[day][index]};}
  return null;
}
function openScheduleEditor(id=null,day=todayName()){
  ensureScheduleIds();
  const found=id?findScheduleBlock(id,day):null;
  const item=found?.item||{id:"",time:"",title:"",type:"Personal",notes:""};
  $("scheduleEditorTitle").textContent=found?"Edit Schedule Block":"Add Schedule Block";
  $("scheduleEditId").value=item.id||"";
  $("scheduleEditDay").value=found?.day||day;
  $("scheduleEditTime").value=item.time||"";
  $("scheduleEditTitle").value=item.title||"";
  const typeOptions=[...$("scheduleEditType").options].map(o=>o.value);
  $("scheduleEditType").value=typeOptions.includes(item.type)?item.type:"Other";
  $("scheduleEditNotes").value=item.notes||"";
  $("scheduleEditDone").checked=found?scheduleDone(dayLog(),item,found.index):false;
  $("deleteScheduleBlock").classList.toggle("hidden",!found);
  $("scheduleEditor").showModal();
  setTimeout(()=>$("scheduleEditTime").focus(),0);
}
async function saveScheduleBlock(){
  const t=trainingState(),id=$("scheduleEditId").value,day=$("scheduleEditDay").value;
  const time=$("scheduleEditTime").value.trim(),title=$("scheduleEditTitle").value.trim();
  if(!time||!title){alert("Enter both a time and title.");return;}
  const item={id:id||uid("block"),time,title,type:$("scheduleEditType").value,notes:$("scheduleEditNotes").value.trim()};
  if(id){
    const found=findScheduleBlock(id);
    if(found){t.schedule[found.day].splice(found.index,1);}
  }
  t.schedule[day]=t.schedule[day]||[];
  t.schedule[day].push(item);
  const log=dayLog();
  log.schedule[item.id]=$("scheduleEditDone").checked;
  await persist();
  $("scheduleEditor").close();
  renderTrainingDashboard();
}
async function deleteScheduleBlock(){
  const id=$("scheduleEditId").value;if(!id)return;
  const found=findScheduleBlock(id);if(!found)return;
  if(!confirm(`Delete “${found.item.title}”?`))return;
  trainingState().schedule[found.day].splice(found.index,1);
  delete dayLog().schedule[id];
  await persist();$("scheduleEditor").close();renderTrainingDashboard();
}
function addScheduleBlock(){openScheduleEditor();}
function renderAll(){
  // Repair any stale monthly bill instances created before a recurring bill was edited.
  if(syncBillInstancesWithRecurring())persist();
  applyTheme();renderHome();renderTrainingDashboard();renderFinance();renderPlanner();renderTracking();renderManagers();renderCRM();renderHealth();renderCareer();renderFamily();renderSimulator();renderCalendarSettings();renderWorkoutSettings();
}
async function exportBackup(){
  const json=JSON.stringify(state,null,2);
  const filename=`dawn-view-web-preview-backup-${localDateKey()}.json`;
  if(window.AndroidBackup?.saveBackup){
    window.AndroidBackup.saveBackup(json,filename);
    return;
  }
  const blob=new Blob([json],{type:"application/json"});
  const url=URL.createObjectURL(blob),a=document.createElement("a");
  a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}
async function importBackup(file){
  const text=await file.text(),parsed=JSON.parse(text);
  if(!validData(parsed))throw new Error("Invalid Dawn View backup");
  state=hydrate(MASTER_SEED,parsed);await persist();renderAll();
}

async function startFresh(){
  if(!confirm("Start fresh? This replaces the sample data stored on this device."))return;
  const fresh=clone(MASTER_SEED);
  fresh.profile.preferred_name="You";
  fresh.profile.location="";
  fresh.major_expenses=[];
  fresh.family_seed=[{id:"self",name:"You",relationship:"Self",parent_ids:[],child_ids:[],partner_ids:[],sibling_ids:[],household_id:"self"}];
  fresh.finance.accounts.forEach(a=>a.balance=0);
  fresh.finance.sinking_allocations=[];
  fresh.finance.recurring_bills=[];
  fresh.finance.debts=[];
  fresh.finance.income_sources=[];
  fresh.finance.planning.next_paycheck_amount=0;
  fresh.finance.planning.other_planned_spending=0;
  fresh.today.top_priorities=[
    {id:"p1",text:"Choose today’s first priority",done:false},
    {id:"p2",text:"Add one money or household action",done:false},
    {id:"p3",text:"Add one personal or long-term action",done:false}
  ];
  fresh.health.weight=null;
  fresh.health.weight_goal=null;
  fresh.health.knee_pain=null;
  fresh.health.exercise_minutes=0;
  fresh.health.water_cups=0;
  fresh.health.cpap_last_night=false;
  fresh.health.status_note="";
  fresh.career.target_role="";
  fresh.career.salary_goal=0;
  fresh.career.shrm_progress=0;
  fresh.career.courses_completed=[];
  fresh.career.next_action="";
  fresh.projects=[];
  fresh.crm.contacts=[];
  fresh.knowledge.notes=[];
  fresh.tracking.bill_instances=[];
  fresh.tracking.paycheck_records=[];
  fresh.tracking.payday_anchors={};
  fresh.decision_simulator.saved_scenarios=[];
  state=fresh;
  await persist();
  renderAll();
  alert("Fresh local workspace created.");
}

function bind(){
  const openView=view=>{document.querySelectorAll("section").forEach(s=>s.classList.add("hidden"));$(view+"View").classList.remove("hidden");document.querySelectorAll(".tabs button").forEach(x=>x.classList.toggle("secondary",x.dataset.view!==view));window.scrollTo(0,0);};
  document.querySelectorAll(".tabs button").forEach(b=>b.onclick=()=>openView(b.dataset.view));
  document.querySelectorAll("[data-view-jump]").forEach(b=>b.onclick=()=>openView(b.dataset.viewJump));
  document.querySelectorAll("[data-add]").forEach(b=>b.onclick=()=>openEditor(b.dataset.add));
  $("saveToday").onclick=async()=>{state.today.quick_notes=$("quickNote").value.trim();await persist();renderHome();};
  $("crmSearch").oninput=renderCRM;
  $("crmCategoryFilter").onchange=renderCRM;
  $("crmImportFamily").onclick=importFamilyToCRM;
  $("addScheduleBlock").onclick=addScheduleBlock;
  document.querySelectorAll("[data-theme-choice]").forEach(b=>b.onclick=()=>{applyTheme(b.dataset.themeChoice);renderCalendarSettings();});
  $("calendarSync").onclick=syncGoogleCalendar;
  $("calendarClear").onclick=clearGoogleCalendar;
  $("calendarDaysAhead").onchange=async()=>{calendarState().days_ahead=Number($("calendarDaysAhead").value||14);await persist();renderCalendarSettings();};
  $("addPrimaryExercise").onclick=()=>openWorkoutExerciseEditor(workoutSettingsDay(),"primary",null);
  $("addAlternativeExercise").onclick=()=>openWorkoutExerciseEditor(workoutSettingsDay(),"alternative",null);
  $("resetWorkoutDay").onclick=resetSelectedWorkoutDay;
  $("cancelWorkoutExercise").onclick=()=>$("workoutExerciseEditor").close();
  $("saveWorkoutExercise").onclick=saveWorkoutExercise;
  $("deleteWorkoutExercise").onclick=deleteWorkoutExercise;
  $("cancelScheduleEdit").onclick=()=>$("scheduleEditor").close();
  $("saveScheduleEdit").onclick=saveScheduleBlock;
  $("deleteScheduleBlock").onclick=deleteScheduleBlock;
  $("resetWorkout").onclick=async()=>{if(confirm("Reset today’s training entries?")){trainingState().logs[localDateKey()]={schedule:{},exercises:{},alternativeExercises:{},scheduleConflict:false,conflictNotes:""};await persist();renderTrainingDashboard();}};
  $("securityOvertimeEnabled").onchange=()=>{toggleOvertimeFields();displayPlanner(plannerCalc());};
  $("calculatePlanner").onclick=()=>displayPlanner(plannerCalc());
  $("saveDefaults").onclick=savePlannerDefaults;
  $("createExpected").onclick=createExpectedPaychecks;
  $("createMonth").onclick=createMonth;
  $("saveTracking").onclick=async()=>{state.tracking.selected_month=$("trackingMonth").value;state.tracking.current_date=$("trackingDate").value;state.tracking.next_payday=$("trackingNextPayday").value;await persist();renderAll();};
  $("addPaycheck").onclick=async()=>{const source=prompt("Source:","Primary Job");if(!source)return;const pay_date=prompt("Pay date YYYY-MM-DD:",state.tracking.current_date||"");if(!pay_date)return;const estimated_net=Number(prompt("Estimated net:",0)||0);const actual_net=Number(prompt("Actual net:",0)||0);state.tracking.paycheck_records.push({id:uid("pay"),source,pay_date,estimated_net,actual_net,status:actual_net>0?"received":"expected",notes:""});await persist();renderAll();};
  $("saveEdit").onclick=saveEditor;$("cancelEdit").onclick=()=>$("editor").close();
  $("saveHealth").onclick=async()=>{state.health.weight=$("healthWeight").value?Number($("healthWeight").value):null;state.health.knee_pain=$("kneePain").value?Number($("kneePain").value):null;state.health.exercise_minutes=Number($("exerciseMinutes").value||0);state.health.water_cups=Number($("waterCups").value||0);state.health.cpap_last_night=$("cpapUsed").checked;state.health.status_note=$("healthNote").value.trim();await persist();renderHealth();};
  $("saveCareer").onclick=async()=>{state.career.target_role=$("targetRole").value.trim();state.career.salary_goal=Number($("salaryGoal").value||0);state.career.shrm_progress=Number($("shrmProgress").value||0);state.career.next_action=$("careerNext").value.trim();await persist();renderCareer();};
  $("runSimulation").onclick=simulate;$("saveSimulation").onclick=async()=>{state.decision_simulator.saved_scenarios.push(simulate());await persist();renderSimulator();};
  $("exportBtn").onclick=exportBackup;
  $("importFile").onchange=async e=>{try{if(e.target.files[0]){await importBackup(e.target.files[0]);alert("Backup imported.");}}catch(error){alert(error.message);}};
  $("resetBtn").onclick=async()=>{if(confirm("Reset this device to the sample preview data?")){state=clone(MASTER_SEED);await persist();renderAll();}};const freshBtn=$("freshStartBtn");if(freshBtn)freshBtn.onclick=startFresh;
}
window.onBackupSaved=(success,message)=>alert(success?`Backup saved: ${message}`:`Backup failed: ${message}`);
window.addEventListener("error", event => {
  console.error("Dawn View runtime error", event.error || event.message);
  const status = $("dataStatus");
  if (status) status.innerHTML = `<strong>App error:</strong> ${escapeHtml(event.message || "Unknown error")}`;
});

applyTheme();
(async()=>{
  try {
    const source=await loadState();
    renderStatus(source);
    bind();
    renderAll();
    renderBankSync();
    if("serviceWorker" in navigator && location.protocol.startsWith("http")) {
      navigator.serviceWorker.register("service-worker.js").catch(console.warn);
    }
  } catch (error) {
    console.error("Dawn View failed to initialize", error);
    const status = $("dataStatus");
    if (status) status.innerHTML = `<strong>Initialization failed:</strong> ${escapeHtml(error?.message || error)}`;
  }
})();

// v2.13.1 workout media preview (video + animated images)
document.addEventListener("input",e=>{if(e.target?.id==="workoutExerciseMedia"||e.target?.id==="workoutExerciseMediaLabel")renderWorkoutMediaPreview($("workoutExerciseMedia")?.value,$("workoutExerciseMediaLabel")?.value);});
