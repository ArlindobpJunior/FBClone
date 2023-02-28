import React from "react";
import { useSession } from "next-auth/react";
import SidebarRow from "./SidebarRow";
import {
  UserIcon,
  UsersIcon,
  ClockIcon,
  UserGroupIcon,
  BuildingStorefrontIcon,
  PlayCircleIcon,
  ChatBubbleOvalLeftIcon,
  BookmarkIcon,
  FlagIcon,
  CalendarDaysIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow Icon={UserIcon} title={session.user.name} />
      <SidebarRow Icon={UsersIcon} title={"Encontrar amigos"} />
      <SidebarRow Icon={ClockIcon} title={"Mais recentes"} />
      <SidebarRow
        src={"https://links.papareact.com/5me"}
        title={"Bem-vindo(a)"}
      />
      <SidebarRow Icon={UserGroupIcon} title={"Grupos"} />
      <SidebarRow Icon={BuildingStorefrontIcon} title={"Marketplace"} />
      <SidebarRow Icon={PlayCircleIcon} title={"Watch"} />
      <SidebarRow Icon={ChatBubbleOvalLeftIcon} title={"Lembranças"} />
      <SidebarRow Icon={BookmarkIcon} title={"Salvos"} />
      <SidebarRow Icon={FlagIcon} title={"Páginas"} />
      <SidebarRow Icon={CalendarDaysIcon} title={"Eventos"} />
      <SidebarRow Icon={ChevronDownIcon} title={"Ver mais"} />
    </div>
  );
};

export default Sidebar;
