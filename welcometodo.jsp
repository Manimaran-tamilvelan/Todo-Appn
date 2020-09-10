<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="java.sql.*"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

	<%
	String list = request.getParameter("array");
	String userName = request.getParameter("userName");
	String password = request.getParameter("password");

	//String[] array = n.split(",");

	//out.print(list);
	//out.print(userName + " - " + password);

	//out.print(", Good");

	try {

		Class.forName("com.mysql.jdbc.Driver");

		Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/User", "root", "tiger");

		// con.setAutoCommit(true);
		Statement st = con.createStatement();
		
		//UPDATE Customers SET ContactName = 'Alfred Schmidt', City= 'Frankfurt' WHERE CustomerID = 1;

		//insert into todo values('Maran','maran@123','Goto Market, Goto Gym, Complete Demo Proj');

		PreparedStatement ps = con.prepareStatement("insert into todo(userName, password, tasks) values(?,?,?)");
		ps.setString(1, userName);
		ps.setString(2, password);
		ps.setString(3, list);

		//System.out.println(ps.toString());
		//String statement = "Select * from todo where userName='"+userName+"' and password='"+password+"';";
		//System.out.println(statement);
		int a = ps.executeUpdate();
		//ResultSet rs = st.executeQuery("Select tasks from todo where userName='"+userName+"'");

		//out.println(rs.getString(3));
		//System.out.println("Inserted");
		
		
		ps.close();
		st.close();
		con.close();
	} catch (Exception e) {
		e.printStackTrace();
	}
	%>
</body>
</html>