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
import {ElInput} from 'element-plus'
import {ElRate} from 'element-plus'
import {ElTimeline,ElTimelineItem} from 'element-plus'
import {ElCarousel} from 'element-plus'
import {ElCarouselItem} from 'element-plus'



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
  app.use(ElInput),
  app.use(ElRate),
  app.use(ElTimeline),
  app.use(ElTimelineItem),
  app.use(ElCarousel),
  app.use(ElCarouselItem),
  app.use(ElBacktop)
}
