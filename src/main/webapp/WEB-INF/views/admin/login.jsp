<form class="form-signin" action="${pageContext.request.contextPath }/admin/login/process" method="post">
   <h2 class="form-signin-heading">Admin Login</h2>
   <input type="text" class="input-block-level" placeholder="Email address" name="username">
   <input type="password" class="input-block-level" placeholder="Password" name="password">
   <label class="checkbox">
     <input type="checkbox" value="remember-me"> Remember me
   </label>
   <button class="btn btn-large btn-primary" type="submit">Login</button>
 </form>