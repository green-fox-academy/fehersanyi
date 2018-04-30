public class Unique {
  public static void main(String[] args) {
   int[] toWorkWith =  makeStraight(new int[] {1, 11, 34, 11, 52, 61, 1, 34});
   System.out.println(makeUnique(toWorkWith));
  }
  public static int[] makeUnique(int[] array) {
    int[] resoultArray = new int[array.length];
    for(int i = 0; i <= array.length; i++) {
      if(array[i] != array[i+1]) {
        resoultArray[i] = array[i];
      }
    }
    return resoultArray;
  }

  public static int[] makeStraight(int[] array) {
    for(int i = 0; i <= array.length; i++) {
      if(array[i+1] < array[i]) {
        int temp = 0;
        temp = array[i+1];
        array[i+1] = array[i];
        array[i] = temp;
      }
    }
    return array;
  }
}
