public class AppendA {
  public static void main(String[] args) {
    String[] animals = {"kuty", "macsk", "cic"};

    appenda(animals);
    System.out.println(animals[0]);
    System.out.println(animals[1]);
    System.out.println(animals[2]);
  }
  public static String[] appenda(String[] animals) {
    for(int i = 0; i < animals.length; i++) {
      animals[i] = animals[i] + "a";
    }
    return animals;
  }
}
