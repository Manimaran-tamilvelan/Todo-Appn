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
		String userName = request.getParameter("userName");
		String password = request.getParameter("password");

	//out.print(n);  
	//out.print(", Good");

	//String id = "Demo";

	try {

		Class.forName("com.mysql.jdbc.Driver");

		Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/User", "root", "tiger");

		Statement st = con.createStatement();
		
		PreparedStatement ps=con.prepareStatement("Select * from todo where userName=? && password=?");  
		ps.setString(1,userName);
		ps.setString(2, password);
		
		
		//String statement = "Select * from todo where userName='"+userName+"' and password='"+password+"';";
		//System.out.println(statement);
		ResultSet rs = ps.executeQuery();
		//ResultSet rs = st.executeQuery("Select tasks from todo where userName='"+userName+"'");
		
		//out.println(rs.getString(3));
		//System.out.println(rs.next());
		
		while(rs.next()) {
			
			
			out.print(rs.getString(3));
			//System.out.println(rs.getString(1));

		}
		
		if(rs!=null){
			rs.close();
		}
		ps.close();
		con.close();
	} catch (Exception e) {
		e.printStackTrace();
	}
	%>

</body>

</html>