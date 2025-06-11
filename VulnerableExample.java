// VulnerableExample.java

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class VulnerableExample {

    // Hardcoded secret API key - detectable by secret scanning
    private static final String API_SECRET = "sk_live_1234567890abcdef1234567890abcdef";

    public static void main(String[] args) {
        String username = "userInput";  // Simulate user input
        String password = "passInput";  // Simulate user input

        try {
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "password");
            Statement stmt = conn.createStatement();

            // Vulnerable to SQL Injection: user input concatenated directly into query
            String query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";
            ResultSet rs = stmt.executeQuery(query);

            while (rs.next()) {
                System.out.println("User ID: " + rs.getInt("id"));
            }

            rs.close();
            stmt.close();
            conn.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
