abstract class Appliance {
  abstract turnOn(): void;
  abstract turnOff(): void;
}

class WashingMachine extends Appliance {
  turnOn(): void {
    console.log("Washing Machine is now ON.");
  }

  turnOff(): void {
    console.log("Washing Machine is now OFF.");
  }
}

class Refrigerator extends Appliance {
  turnOn(): void {
    console.log("Refrigerator is now ON.");
  }

  turnOff(): void {
    console.log("Refrigerator is now OFF.");
  }
}

// Использование
const appliances: Appliance[] = [new WashingMachine(), new Refrigerator()];
appliances.forEach((appliance) => {
  appliance.turnOn();
  appliance.turnOff();
});
