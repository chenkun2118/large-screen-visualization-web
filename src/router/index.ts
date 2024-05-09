import { createRouter, createWebHistory } from 'vue-router';
import IntelligentDetection from '@/pages/IntelligentDetection/index.vue';
import EmploymentState from '@/pages/EmploymentState/index.vue';
import SecurityManage from '@/pages/SecurityManage/index.vue';
import EquipmentOperation from '@/pages/EquipmentOperation/index.vue';

const routes = [
  {
    path: '/',
    name: '智能检测',
    component: IntelligentDetection,
    meta: { title: '智能检测' },
  },
  {
    path: '/employmentstate',
    name: '就业态势',
    component: EmploymentState,
    meta: { title: '就业态势' },
  },
  {
    path: '/securitymanage',
    name: '安防管理',
    component: SecurityManage,
    meta: { title: '安防管理' },
  },
  {
    path: '/equipmentoperation',
    name: '设备运维',
    component: EquipmentOperation,
    meta: { title: '设备运维' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
