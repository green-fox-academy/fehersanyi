public class ToDoText {
  public static void main(String[] args) {
    String todoText = " - Buy milk\n";
    todoText = todoText.concat(" - Download games\n");
    todoText = todoText.concat("\t - Diablo");
    todoText = todoText.replaceFirst(" ", "My todo:\n");

    System.out.println(todoText);
  }
}
