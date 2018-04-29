public class PrintAll {
  public static void main(String[] args) {
    int[] numbers = {4, 5, 6, 7};
    printEmAll(numbers);
  }
  public static void printEmAll(int[] numbers) {
    for(int i = 0; i < numbers.length; i++) {
      System.out.println(numbers[i]);
    }
  }
}
