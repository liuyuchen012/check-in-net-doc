# 📡 API 参考文档（v2.7）

> [!WARNING]
> 本文档为 **v2.7 旧版归档**。最新版本请参考 [v2.8 API 文档](/api)。

本参考文档详细说明 AgoraIn v2.7 服务器的 REST API 接口。

---

## 基础信息

### 服务器

| 项目 | 值 |
|------|-----|
| 基地址 | `http://<server>:5000` |
| 数据格式 | JSON |
| 认证方式 | 请求头 `X-Sign` 签名验证 |
| 编码 | UTF-8 |

### 签名机制

所有 API 请求需在请求头携带签名：

```
X-Sign: <HMAC-SHA256 签名>
X-Device: <设备UUID>
X-Timestamp: <Unix时间戳>
```

签名算法：`HMAC-SHA256(secret, method + path + timestamp)`

---

## 数据模型

### CheckInData（签到数据）

| 字段 | 类型 | 说明 |
|------|------|------|
| Id | int | 主键 |
| Name | string | 学生姓名 |
| CheckInTime | DateTime | 签到时间 |
| DeviceName | string | 设备名称 |
| TaskId | string | 任务 ID |

### CheckInTask（签到任务）

| 字段 | 类型 | 说明 |
|------|------|------|
| Id | string | 任务 ID |
| Name | string | 任务名称 |
| Students | List&lt;string&gt; | 学生名单 |
| CreateTime | DateTime | 创建时间 |
| Status | int | 任务状态 |

### DeviceInfo（设备信息）

| 字段 | 类型 | 说明 |
|------|------|------|
| DeviceUuid | string | 设备唯一标识 |
| DeviceName | string | 设备名称 |
| LastOnline | DateTime | 最后在线时间 |

---

## 端点一览

### 状态与健康

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/health` | 健康检查 |

### 签到相关

| 方法 | 路径 | 说明 |
|------|------|------|
| POST | `/api/checkin` | 提交签到 |
| GET | `/api/checkin/task/{taskId}` | 获取任务签到记录 |
| DELETE | `/api/checkin/{id}` | 取消签到 |

### 任务管理

| 方法 | 路径 | 说明 |
|------|------|------|
| POST | `/api/task` | 创建签到任务 |
| GET | `/api/task` | 获取任务列表 |
| GET | `/api/task/{id}` | 获取任务详情 |
| PUT | `/api/task/{id}` | 更新任务 |
| DELETE | `/api/task/{id}` | 删除任务 |

### 设备管理

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/device` | 获取设备列表 |
| POST | `/api/device/register` | 注册设备 |
| PUT | `/api/device/{uuid}` | 更新设备信息 |

### 数据管理

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/export/csv` | 导出 CSV 数据 |
| POST | `/api/import/csv` | 导入 CSV 数据 |
| DELETE | `/api/data/clear` | 清空全部数据 |

---

## 端点详解

### GET /api/health

健康检查端点，返回服务器运行状态。

**响应示例：**

```json
{
  "status": "ok",
  "version": "2.7.0",
  "time": "2025-01-01T00:00:00Z"
}
```

---

### POST /api/checkin

提交签到记录。

**请求体：**

```json
{
  "name": "张三",
  "taskId": "task_001"
}
```

**响应示例：**

```json
{
  "success": true,
  "message": "签到成功",
  "data": {
    "id": 1,
    "name": "张三",
    "checkInTime": "2025-01-01T09:00:00Z",
    "rank": 1
  }
}
```

---

### GET /api/checkin/task/{taskId}

获取指定任务的签到记录。

**响应示例：**

```json
{
  "success": true,
  "data": {
    "taskId": "task_001",
    "total": 45,
    "checkedIn": 38,
    "records": [
      {
        "name": "张三",
        "checkInTime": "2025-01-01T09:00:00Z"
      }
    ]
  }
}
```

---

### DELETE /api/checkin/{id}

取消签到记录。

**响应示例：**

```json
{
  "success": true,
  "message": "签到已取消"
}
```

---

### POST /api/task

创建签到任务。

**请求体：**

```json
{
  "name": "语文课签到",
  "students": ["张三", "李四", "王五"]
}
```

**响应示例：**

```json
{
  "success": true,
  "data": {
    "id": "task_001",
    "name": "语文课签到",
    "students": ["张三", "李四", "王五"],
    "createTime": "2025-01-01T08:00:00Z",
    "status": 1
  }
}
```

---

### GET /api/task

获取任务列表。

**响应示例：**

```json
{
  "success": true,
  "data": [
    {
      "id": "task_001",
      "name": "语文课签到",
      "status": 1
    }
  ]
}
```

---

### GET /api/task/{id}

获取任务详情。

**响应示例：**

```json
{
  "success": true,
  "data": {
    "id": "task_001",
    "name": "语文课签到",
    "students": ["张三", "李四", "王五"],
    "createTime": "2025-01-01T08:00:00Z",
    "status": 1
  }
}
```

---

### PUT /api/task/{id}

更新任务信息。

**请求体：**

```json
{
  "name": "语文课签到（改）",
  "students": ["张三", "李四", "王五", "赵六"]
}
```

---

### DELETE /api/task/{id}

删除签到任务。

---

### GET /api/device

获取设备列表。

**响应示例：**

```json
{
  "success": true,
  "data": [
    {
      "deviceUuid": "dev_001",
      "deviceName": "一班白板",
      "lastOnline": "2025-01-01T09:00:00Z"
    }
  ]
}
```

---

### POST /api/device/register

注册新设备。

**请求体：**

```json
{
  "deviceUuid": "dev_001",
  "deviceName": "一班白板"
}
```

---

### PUT /api/device/{uuid}

更新设备信息（如重命名）。

**请求体：**

```json
{
  "deviceName": "一班白板（新）"
}
```

---

### GET /api/export/csv

导出全部签到数据为 CSV 文件。

**响应头：**

```
Content-Type: text/csv
Content-Disposition: attachment; filename="checkin_20250101.csv"
```

---

### POST /api/import/csv

导入 CSV 格式的学生名单。

**请求体（multipart/form-data）：**

```
file: students.csv
```

---

### DELETE /api/data/clear

清空全部签到数据（需三次确认）。

**请求体：**

```json
{
  "confirmCode": "CLEAR-ALL-DATA"
}
```

---

## 错误码

| 状态码 | 说明 |
|--------|------|
| 200 | 成功 |
| 400 | 请求参数错误 |
| 401 | 签名验证失败 |
| 404 | 资源不存在 |
| 409 | 数据冲突（重复签到） |
| 500 | 服务器内部错误 |

### 错误响应格式

```json
{
  "success": false,
  "error": {
    "code": 400,
    "message": "请求参数错误",
    "details": "缺少必要字段: name"
  }
}
```

---

## 调用示例

### cURL 示例

```bash
# 健康检查
curl http://localhost:5000/api/health

# 创建任务
curl -X POST http://localhost:5000/api/task \
  -H "Content-Type: application/json" \
  -H "X-Sign: <签名>" \
  -d '{"name":"语文课签到","students":["张三","李四"]}'

# 提交签到
curl -X POST http://localhost:5000/api/checkin \
  -H "Content-Type: application/json" \
  -H "X-Sign: <签名>" \
  -d '{"name":"张三","taskId":"task_001"}'
```

### PowerShell 示例

```powershell
# 健康检查
Invoke-RestMethod -Uri "http://localhost:5000/api/health"

# 获取任务列表
$headers = @{
  "X-Sign" = "<签名>"
  "X-Device" = "dev_001"
}
Invoke-RestMethod -Uri "http://localhost:5000/api/task" -Headers $headers
```
