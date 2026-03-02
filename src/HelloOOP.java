public class HelloOOP {
    public static void main(String [] args){
        System.out.println("Hello, oop world!");
        System.out.println("JVM version:" +
                System.getProperty("java.version"));


    /* 1,with out public static void main, the JVM
    does not know where to start executing our program
    so it throws the error. JVM says Main method
    not found in class HelloOOP, please define
    the main method as:
   public static void main(String[] args)
or a JavaFX application class must extend
 javafx.application.Application
 2.The Java requires a main method because it is the entry
 point of the program. without it , the program has no
 starting point, so it won't run.
      */

    }
}
