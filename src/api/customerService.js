import axios from "@/axios";

// 查询 Markdown 问答文件分页列表
export function findMarkdownFilePageList(current, size) {
    return axios.post("/customer-service/md/list", {current, size})
}

// 上传客服问答 Markdown 文件
export function uploadMarkdownFile(formData) {
    return axios.post("/customer-service/md/upload", formData)
}

// 删除指定的 Markdown 文件
export function deleteMarkdownFile(id) {
    return axios.post("/customer-service/md/delete", {id})
}

// 修改 Markdown 问答文件
export function updateMarkdownFile(record) {
    return axios.post("/customer-service/md/update", record)
}

