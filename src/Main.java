import java.util.Scanner;

public class Main{

    public static void main(String[] args) {

        // THIS IS MY FIRST JAVA PROGRAM
      /* This is a


      multi line

       comment */

        double width = 0;
        double height = 0;
        double area = 0;

        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter the width ");
        width = scanner.nextDouble();/*for String we
         use nextLine.
         we also can use next but when we add Line the
          compiler allow
         to use space.

         */

        System.out.println("Enter the height ");
        height = scanner.nextDouble();

        area = width * height;

        System.out.println("The area is: " + area + "cm²");
        scanner.close();


    }
}