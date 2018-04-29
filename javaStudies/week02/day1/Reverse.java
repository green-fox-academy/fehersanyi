
public class Reverse {
  public static void main(String[] args) {
    int[] aj = {3, 4, 5, 6, 7};

    System.out.println(reverse(aj));
  }

  public static int[] reverse(int[] inputArray) {
    int[] temp = new int[inputArray.length];
    for(int i = 0; i < inputArray.length; i++) {
      temp[inputArray.length - 1 - i] = inputArray[i];
     }
      System.out.println(temp[0]);
    return temp;
  }
}
