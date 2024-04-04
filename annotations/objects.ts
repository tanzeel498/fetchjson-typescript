const profile = {
  pName: 'Tanzeel',
  age: 27,
  coords: { lat: 3, lng: 45 },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, pName }: { age: number; pName: string } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
