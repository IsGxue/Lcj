<template>
  <div class="parent">
    <div class="login_contner">
      <div class="login_header">
        <h1>WMS系统</h1>
      </div>
      <div>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item prop="loginName">
            <span class="icon"> <i class="el-icon-user icon_img"></i></span>
            <el-input type="text" v-model="ruleForm.loginName"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <span class="icon"> <i class="el-icon-user"></i></span>
            <el-input
              type="password"
              v-model="ruleForm.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import mock from "../../mock/mock";
import axios from "../../api/axios";
export default {
  data() {
    var loginName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else {
        callback();
      }
    };
    var password = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        loginName: "",
        password: "",
      },
      rules: {
        loginName: [{ required: true, validator: loginName, trigger: "blur" }],
        password: [{ required: true, validator: password, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      // 可选地，上面的请求可以这样做
      this.$axios
        .get("/login", {
          data: {
            loginName: 'test',
            password:123
          },
        })
        .then(function (response) {
          console.log(response,'response');
        })
        .catch(function (error) {
          console.log(error,'error');
        });

      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped lang="less">
.parent {
  position: relative;
  width: 100vw;
  height: 100vh;

  background: url("../../../assse/img/login/bg.jpg") no-repeat;
  background-size: cover;
  background-position: center center;
}
.login_contner {
  width: 500px;
  //   height: 500px;
  //   border: 1px red solid;
  position: absolute;
  top: calc((100vh - 500px) / 2);
  left: calc((100vw - 500px) / 2);
}
.login_header {
}
.icon {
  vertical-align: middle;
  width: 30px;
  display: inline-block;
  .icon_img {
    line-height: 40px;
  }
}
.el-icon-user {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-size: 30px;
  color: #fff;
}
.item__content:before {
  clear: both;
}
.el-form-item__content:after,
.el-form-item__content:before {
  display: table;
  content: "";
}
h1 {
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
}
/deep/.el-form-item__content {
  margin-left: 0px !important;
  border: 1px #fff solid;
  border-radius: 5px;
}
.el-input {
  display: inline-block;
  height: 47px;
  width: 90%;
  /deep/.el-input__inner {
    background: transparent !important;
    border: none;
    height: 45px;
    line-height: 45px;
  }
  input {
    background: transparent !important;
    border: 0px;
    -webkit-appearance: none;
    border-radius: 0px;
    padding: 12px 5px 12px 15px;
    height: 47px;
  }
}

.el-form-item {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #454545;
}
.el-button {
  width: 100%;
}
</style>