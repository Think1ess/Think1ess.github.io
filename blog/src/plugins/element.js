import { ElButton } from 'element-plus'
import { ElMenu } from 'element-plus'
import { ElMenuItem } from 'element-plus'
import { ElMenuItemGroup } from 'element-plus'
import {ElSubmenu} from 'element-plus'
import {ElImage} from 'element-plus'
import {ElBacktop} from 'element-plus'
import {ElCol} from 'element-plus'
import {ElRow} from 'element-plus'
import {ElCard} from 'element-plus'
import {ElDivider} from 'element-plus'


export default (app) => {
  app.use(ElButton),
  app.use(ElMenu),
  app.use(ElMenuItem),
  app.use(ElMenuItemGroup),
  app.use(ElSubmenu),
  app.use(ElImage),
  app.use(ElCol),
  app.use(ElRow),
  app.use(ElCard),
  app.use(ElDivider),
  app.use(ElBacktop)
}
