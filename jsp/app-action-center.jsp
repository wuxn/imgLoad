<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<!-- 活动中心页面 -->
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,height=device-height,initial-scale=1.0,maximum-scale=1.0,user-scalable=yes">
<meta name="format-detection" content="telephone=no,email=no,adress=no">
<title>圈子账本</title>
<link rel="stylesheet" type="text/css" href="http://img.qufaya.com/www/css/reset.css">
<link rel="stylesheet" type="text/css" href="http://img.qufaya.com/www/css/app-action-center.css">
<script type="text/javascript" src="http://img.qufaya.com/www/js/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="http://img.qufaya.com/www/js/isImgLoad.js"></script>
</head>
<body>
	<div class="action-container">
		<div class="action-content">
			<!-- 图片列表 -->
			<!-- 循环自动生成所需标签，让while或do-while循环通过脚本 -->
			<c:forEach var="promotion" items="${promotions}">
				<ul class="action" id="imagelist">
					<li>
						<a href="${promotion.url}">
							<img data="${promotion.imageurl}" class="action-img">
						</a>		
					</li>
				</ul>
			</c:forEach>
		</div>
		
	</div>
</body>
	
</html>
