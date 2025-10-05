"use client"

import { Card } from "@/components/ui/card"
import { Instagram, MessageCircle, Youtube, Twitch, Twitter, Facebook } from "lucide-react"

interface PlatformPreviewProps {
  nickname: string
  translations: any
}

export function PlatformPreview({ nickname, translations }: PlatformPreviewProps) {
  const platforms = [
    {
      name: "Instagram",
      icon: Instagram,
      color: "from-purple-500 to-pink-500",
      preview: (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
            <div>
              <p className="font-semibold">{nickname}</p>
              <p className="text-xs text-muted-foreground">@{nickname.toLowerCase().replace(/[^a-z0-9]/g, "")}</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Discord",
      icon: MessageCircle,
      color: "from-indigo-500 to-blue-500",
      preview: (
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500" />
            <div>
              <p className="font-semibold text-white">{nickname}</p>
              <p className="text-xs text-gray-400">Online</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "YouTube",
      icon: Youtube,
      color: "from-red-500 to-red-600",
      preview: (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600" />
            <div>
              <p className="font-semibold">{nickname}</p>
              <p className="text-xs text-muted-foreground">1.2M subscribers</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Twitch",
      icon: Twitch,
      color: "from-purple-600 to-purple-700",
      preview: (
        <div className="bg-gray-900 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-purple-700" />
            <div>
              <p className="font-semibold text-white">{nickname}</p>
              <p className="text-xs text-gray-400">🔴 LIVE</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Twitter",
      icon: Twitter,
      color: "from-blue-400 to-blue-500",
      preview: (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-500" />
            <div>
              <p className="font-semibold">{nickname}</p>
              <p className="text-xs text-muted-foreground">@{nickname.toLowerCase().replace(/[^a-z0-9]/g, "")}</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Facebook",
      icon: Facebook,
      color: "from-blue-600 to-blue-700",
      preview: (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700" />
            <div>
              <p className="font-semibold">{nickname}</p>
              <p className="text-xs text-muted-foreground">Active now</p>
            </div>
          </div>
        </div>
      ),
    },
  ]

  if (!nickname) return null

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">{translations.platformPreview || "Platform Önizleme"}</h3>
      <p className="text-sm text-muted-foreground mb-6">
        {translations.platformPreviewDescription || "Nickinizin farklı platformlarda nasıl görüneceğini inceleyin"}
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {platforms.map((platform) => {
          const Icon = platform.icon
          return (
            <div key={platform.name} className="space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${platform.color}`}>
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium">{platform.name}</span>
              </div>
              {platform.preview}
            </div>
          )
        })}
      </div>
    </Card>
  )
}
